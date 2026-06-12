// Tweaks panel — dev-only overlay for tweaking design tokens.
// In production this is a transparent no-op; the App falls back to these
// exports automatically if the panel isn't mounted.

window.useTweaks = function useTweaks(defaults) {
  const [tweaks, setTweaks] = React.useState(defaults);
  const set = React.useCallback(function(k, v) {
    setTweaks(function(p) { return Object.assign({}, p, { [k]: v }); });
  }, []);
  return [tweaks, set];
};

window.TweaksPanel  = function TweaksPanel()  { return null; };
window.TweakSection = function TweakSection() { return null; };
window.TweakRadio   = function TweakRadio()   { return null; };
window.TweakToggle  = function TweakToggle()  { return null; };
