#!/bin/sh
lein clean
lein prod-build
expo build:ios
