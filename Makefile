SRC = ./src
DEST = ./site

.SILENT: greeting

greeting :
	echo "\nIt's my website! Available commands... \n"
	cat Makefile | grep ":" | grep -Ev "(grep|SILENT|greeting)" | cut -d ":" -f 1

dev_server :
	cd ${SRC} && bundle exec jekyll serve

build :
	cd ${SRC} && jekyll build -d ../${DEST} --disable-disk-cache
