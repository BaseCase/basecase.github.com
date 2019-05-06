---
layout: blog_post
title: "HOWTO: Add a Menu Bar Extra to a macOS App"
publish_date: Feb 20, 2019
---

In this post, I’ll give you a quick rundown of how to create a Menu Bar Extra for your macOS app. The [Apple Dev Center docs](https://developer.apple.com/documentation/) explain all of this, but it took me a little while to piece it all together, so here’s a single document with the whole process in one place.


### What are Menu Bar Extras?
“Menu Bar Extras” are what Apple calls those little icons in the upper right of the desktop next to the clock. This area is the thing I’ve been mistakenly calling the “system tray” for the past several years.

![blep](/img/menu_bar_extras/how_to_make_menu_bar_extras_pic01.png)

Let’s take a look at how to add our own menu bar extra.


### (optional) Create a new project in Xcode
If you don’t have an existing macOS project you want to modify, start by creating a new one:

Launch Xcode, then pick **Create a new Xcode project** from the splash screen. Choose macOS > Cocoa App from the template menu:

![blep 2](/img/menu_bar_extras/how_to_make_menu_bar_extras_pic03.png)

Type anything you like into the Product Name field, and don’t worry about any of the other options besides ensuring that Language is set to **Swift**. Save the project anywhere you want.


### Add an NSStatusItem to the system NSStatusBar
The Cocoa class that represents the Menu Bar as a whole is `NSStatusBar`. We can get a pointer to the system-wide one by saying `NSStatusBar.system`. You probably don’t want to keep it there forever, but for this demo, let’s just throw all of this code in `AppDelegate.applicationDidFinishLaunching`. Click on `AppDelegate.swift` in the Xcode Project Navigator, find the method that looks like this:

```swift
    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Insert code here to initialize your application
    }
```

and type the following in the method body:

```swift
let statusBar = NSStatusBar.system
```

Each item in that menu bar is an instance of `NSStatusItem`. We can make our own by using a Factory Method provided by the `NSStatusBar` instance.

```swift
let statusBarItem = statusBar.statusItem(
    withLength: NSStatusItem.squareLength)
```

The `withLength:` argument is telling the `statusItem` method that you want a square icon (as opposed to a variable-width one). Almost all of the menu bar extras I’ve seen are square, so that’s what we’re going with.

### Set up the Status Item button
The appearance of the `NSStatusItem` is handled by its `button` property, which is an `NSStatusBarButton`, which is itself a fairly thin wrapper around `NSButton`, so it supports the same styling properties as any other button. Let’s give our status item a simple emoji icon:

```swift
statusBarItem.button?.title = "🌯"
```

We’ve just set a text title for our status item, which is valid but somewhat rare. It’s more common to use a **template image** for the icon, which is an image which contains only black and clear colors. Template images make it possible for things like Dark Mode to adjust the icon color automatically.

You can [read more about Template Images here](https://developer.apple.com/documentation/appkit/nsimage/1520017-istemplate); for the sake of brevity, we’ll stick with the text title for now.


### Create a menu object
We’ll need an instance of `NSMenu` that will show the user options when they click on the menu bar extra icon.

```swift
let statusBarMenu = NSMenu(title: "Cap Status Bar Menu")
```


### Set the NSStatusItem’s menu property
We need to associate our new menu with the status item we created earlier.

```swift
statusBarItem.menu = statusBarMenu
```


### Retain a reference to NSStatusItem instance
`NSStatusItem` instances behave like any other Swift variable, which means their memory is only retained for as long as they are in scope. To prevent our menu from disappearing as soon as it’s created, we need to keep a variable somewhere that will live beyond the end of the function in which we’re creating it. For simplicity’s sake, let’s just add a property to our `AppDelegate` instance. At the top of the class, say:

```swift
@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {
    var statusBarItem: NSStatusItem!

    // remainder of class…
```

and in `applicationDidFinishLaunching`, remove the `let` from the line where we created the `NSStatusItem`, so it looks like this:

```swift
statusBarItem = statusBar.statusItem(
    withLength: NSStatusItem.squareLength)
```

That way, we’re assigning this newly created `NSStatusItem` instance to our `AppDelegate` instance variable instead of a local variable that exists only within the method body, so the menu will live as long as our app does.

At this point, we have enough code to run our app and see the status bar icon! It doesn’t do anything yet, but this is still progress:

![blep 3](/img/menu_bar_extras/how_to_make_menu_bar_extras_pic02.png)


### Create an NSMenu with one or more NSMenuItems
We need to do two more things to finish up: build the menu and wire up actions. Making the menu is straightforward:

```swift
statusBarMenu.addItem(
    withTitle: "Order a burrito",
    action: nil,
    keyEquivalent: "")

statusBarMenu.addItem(
    withTitle: "Cancel burrito order",
    action: nil,
    keyEquivalent: "")
```

This will add two options to our menu. You can re-run the app to see them when you click the status bar icon, but they don’t do anything yet!


### Wire up menu items to methods with selectors
Add two new methods to `AppDelegate` after the end of `applicationDidFinishLaunching`:

```swift
@objc func orderABurrito() {
    print("Ordering a burrito!")
}

@objc func cancelBurritoOrder() {
    print("Canceling your order :(")
}
```

This is the code we want to run when a user selects our menu options. To wire up these functions to the menu items, we’ll make **selectors** that point to them. A selector is how you get a reference to a Swift property or method that the Objective-C runtime can understand. We need selectors here because that runtime is what calls our code in response to user actions.

The `@objc` in front of `func` makes our Swift code available to the Objective-C runtime, which makes it possible to write a selector that looks like this:

```swift
#selector(AppDelegate.orderABurrito)
```

Replace the `nil`s in our menu setup code with appropriate selectors, so now they will look like this:

```swift
statusBarMenu.addItem(
    withTitle: "Order a burrito",
    action: #selector(AppDelegate.orderABurrito),
    keyEquivalent: "")

statusBarMenu.addItem(
    withTitle: "Cancel burrito order",
    action: #selector(AppDelegate.cancelBurritoOrder),
    keyEquivalent: "")
```

We’re relying on the [Responder Chain](https://developer.apple.com/documentation/appkit/nsresponder) to route the menu item actions to our `AppDelegate` class. We could also explicitly set the `target` properties of these `NSMenuItem`s to make it more obvious who will handle the action, but it’s not required in this case.

At this point, we’ve got a super basic but fully functional Menu Bar Extra. Run your app and click on your menu options to see log output in Xcode. There’s a ton more you can do with these menus, but this is a start. Have fun!

![blep 4](/img/menu_bar_extras/how_to_make_menu_bar_extras_pic04.png)


### The complete code

```swift
@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {
    var statusBarItem: NSStatusItem!

    func applicationDidFinishLaunching(_ aNotification: Notification) {

        let statusBar = NSStatusBar.system
        statusBarItem = statusBar.statusItem(
            withLength: NSStatusItem.squareLength)
        statusBarItem.button?.title = "🌯"

        let statusBarMenu = NSMenu(title: "Cap Status Bar Menu")
        statusBarItem.menu = statusBarMenu

        statusBarMenu.addItem(
            withTitle: "Order a burrito",
            action: #selector(AppDelegate.orderABurrito),
            keyEquivalent: "")

        statusBarMenu.addItem(
            withTitle: "Cancel burrito order",
            action: #selector(AppDelegate.cancelBurritoOrder),
            keyEquivalent: "")
    }


    @objc func orderABurrito() {
        print("Ordering a burrito!")
    }


    @objc func cancelBurritoOrder() {
        print("Canceling your order :(")
    }


    // Remainder of AppDelegate…
```


### Further Reading
+ [Human Interface Guidelines on Menu Bar Extras](https://developer.apple.com/design/human-interface-guidelines/macos/extensions/menu-bar-extras/)
+ [NSStatusBar documentation](https://developer.apple.com/documentation/appkit/nsstatusbar)
+ [NSStatusItem documentation](https://developer.apple.com/documentation/appkit/nsstatusitem)
