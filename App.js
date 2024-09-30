import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { ORG, WORLD_ID } from './config';
import ExampleStartScreen from './ExampleStartScreen';

export default function App() {
  const [showWebView, setShowWebView] = useState(false);
  // Monkey patch - this is required to prevent GFN classifying the device as unknown, which would result in session being aborted
  const inject = `(function() {
      const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
      XMLHttpRequest.prototype.setRequestHeader = function(header, value) {
          if(header === "nv-browser-type") {
              value = "SAFARI";
              console.log("nv-browser-type header is set to SAFARI");
          }
          return originalSetRequestHeader.apply(this, arguments);
      };
  })();`

  const webViewUri = `https://${ORG}.m2worlds.io/worlds/${WORLD_ID}`

  return (
    <View style={styles.container}>
      {showWebView ? (
        <WebView
          injectedJavaScriptBeforeContentLoaded={inject}
          webviewDebuggingEnabled={true}
          source={{ uri: webViewUri }}
          scrollEnabled={true}
          allowsFullscreenVideo={false}
          userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1"
          allowsInlineMediaPlayback={true}
        />
      ) : (
        <ExampleStartScreen onPress={() => setShowWebView(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});