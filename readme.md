# Metadeal

A real estate deal evaluator for iOS and Android. Punch in a property's numbers and Metadeal runs the underwriting for you — mortgage payment, monthly cash flow, cap rate, cash-on-cash ROI, 5-year appreciation, total return, and how the deal compares to leaving the same money in the stock market.

The app is written in [ClojureScript](https://clojurescript.org/), targeting [React Native](https://reactnative.dev/) via [Expo](https://expo.dev/), built with [shadow-cljs](https://github.com/thheller/shadow-cljs), and wired up with [Reagent](https://reagent-project.github.io/) and [re-frame](https://github.com/day8/re-frame).

## What it does

Three screens, one workflow:

- **Calculate** — Enter purchase price, rent, units, taxes, vacancy, etc. Every field is optional; anything left blank is filled in with a sensible default and shown as a placeholder so you can see the assumed value before committing to it. The full derived model updates as you type.
- **Properties** — Save deals you're evaluating and come back to them later. Stored locally on the device via `AsyncStorage`.
- **Reports** — Charts and break-even analysis. Sweep an input (e.g. purchase price) and find the value where a target output (e.g. cash flow) crosses zero.

The math lives in `src/main/abakus/analyzer.cljs` — a dictionary of named formulas that are resolved lazily so each metric is computed exactly once per property.

## Stack

- ClojureScript + shadow-cljs
- React Native 0.72 on Expo SDK 49
- Reagent + re-frame for UI and state
- React Navigation (native stack)
- react-native-chart-kit for reports
- react-native-google-mobile-ads for AdMob
- `@react-native-async-storage/async-storage` for persistence

## Layout

```
src/main/abakus/
  core.cljs          ; app entry, root component, navigation setup
  analyzer.cljs      ; the underwriting model — all formulas live here
  edit_prop.cljs     ; Calculate screen
  list_props.cljs    ; Properties screen
  reports.cljs       ; Reports screen (charts + break-even)
  handlers.cljs      ; re-frame event handlers
  subs.cljs          ; re-frame subscriptions
  db.cljs            ; initial app-db
  persistence.cljs   ; AsyncStorage read/write
  rn.cljs            ; React Native interop shims
  styles.cljs        ; shared styles
  navbar.cljs        ; bottom nav bar
  comms.cljs         ; backend calls (UID acquisition, etc.)
  ads.cljs           ; AdMob integration
  number_utils.cljs  ; formatting helpers
```

## Running it

Install dependencies:

```sh
npm i
```

Start the ClojureScript compiler in watch mode and Expo in two terminals:

```sh
# terminal 1 — wait for the first compile to finish before starting Expo
npx shadow-cljs watch app

# terminal 2
npm start            # Expo dev tools
# or:
npm run ios          # iOS simulator
npm run android      # Android emulator
npm run web          # browser (react-native-web)
```

### REPL

Once the app is running on a device, simulator, or browser, connect to the shadow-cljs nREPL and select the `:app` build:

```clojure
(shadow/nrepl-select :app)
```

Verify the connection:

```clojure
(js/alert "hello from the repl")
```

Calva users can skip the `nrepl-select` step — jack-in handles it.

### Disable Expo Fast Refresh

Expo's Fast Refresh fights shadow-cljs's hot reload. Open the dev menu on the device and turn **Fast Refresh** off (you may need to toggle it on and back off once for it to take effect).

## Production builds

```sh
npx shadow-cljs release app
```

Then build the native binaries via EAS:

```sh
eas build --profile production --platform ios
eas build --profile production --platform android
```

`eas.json` and `eas-build-pre-install.sh` are already set up — the pre-install script provisions Java in the EAS macOS workers so shadow-cljs can compile during the build.

For an internal dev/test build:

```sh
eas build --profile development
```

## App identity

- Expo slug: `metadeal`
- iOS bundle ID: `com.descala.metadeal`
- Current version: see `app.json` → `expo.version`

## License

MIT — see [LICENSE](./LICENSE).
