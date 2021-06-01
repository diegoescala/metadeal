#!/bin/sh
./node_modules/.bin/shadow-cljs release app
expo build:ios
