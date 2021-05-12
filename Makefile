#
# init initializes the Blacksmith Dashboard and its dependencies properly.
# This is necessary to avoid duplicated React dependencies.
#
init:
	npm link @nunchistudio/blacksmith-eui
	npm install
	npm link ./node_modules/@nunchistudio/blacksmith-eui/node_modules/react

#
# dev starts the development environment.
#
dev:
	npm run dev

#
# build builds and exports the dashboard so it is ready to released.
#
build:
	rm -rf ./.next ./out
	npm run build
	npm run export
