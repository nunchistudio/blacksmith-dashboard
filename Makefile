.PHONY: init dev build

init:
	npm link @nunchistudio/blacksmith-eui
	npm install
	npm link ./node_modules/@nunchistudio/blacksmith-eui/node_modules/react

dev:
	npm run dev

build:
	rm -rf ./.next ./out
	npm run build
	npm run export
