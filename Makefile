DEST = ./site

.SILENT: greeting

greeting :
	echo "\nIt's my website! Available commands... \n"
	cat Makefile | grep ":" | grep -Ev "(grep|SILENT|greeting)" | cut -d ":" -f 1

dev_server :
	bundle exec jekyll serve

build :
	jekyll build -d ./${DEST} --disable-disk-cache
