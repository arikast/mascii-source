regen:
	$(MAKE) -C antlr/scripts

run-tests:
	$(MAKE) -C mascii2-typescript run-tests

all: regen run-tests