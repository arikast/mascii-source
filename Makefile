all: regen run-tests embed

regen:
	$(MAKE) -C antlr/scripts

run-tests:
	$(MAKE) -C mascii2-typescript run-tests

# Build the embeddable browser library.
# Run 'make embed-install' once after cloning to install npm dependencies.
embed:
	cd mascii-embed && npm run build

embed-install:
	cd mascii-embed && npm install
