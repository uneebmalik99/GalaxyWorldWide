
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

// @react-native-community/async-storage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// @react-native-community/cameraroll
import com.reactnativecommunity.cameraroll.CameraRollPackage;
// @react-native-community/masked-view
import org.reactnative.maskedview.RNCMaskedViewPackage;
// @react-native-community/netinfo
import com.reactnativecommunity.netinfo.NetInfoPackage;
// @react-native-firebase/app
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
// @react-native-firebase/messaging
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;
// lottie-react-native
import com.airbnb.android.react.lottie.LottiePackage;
// react-native-biometrics
import com.rnbiometrics.ReactNativeBiometricsPackage;
// react-native-camera
import org.reactnative.camera.RNCameraPackage;
// react-native-document-picker
import com.reactnativedocumentpicker.DocumentPickerPackage;
// react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
// react-native-image-crop-picker
import com.reactnative.ivpusic.imagepicker.PickerPackage;
// react-native-image-picker
import com.imagepicker.ImagePickerPackage;
// react-native-linear-gradient
import com.BV.LinearGradient.LinearGradientPackage;
// react-native-localization
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
// react-native-permissions
import com.zoontek.rnpermissions.RNPermissionsPackage;
// react-native-push-notification
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
// react-native-restart
import com.reactnativerestart.RestartPackage;
// react-native-safe-area-context
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
// react-native-screens
import com.swmansion.rnscreens.RNScreensPackage;
// react-native-snackbar
import com.azendoo.reactnativesnackbar.SnackbarPackage;
// react-native-touch-id
import com.rnfingerprint.FingerprintAuthPackage;
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;
// rn-fetch-blob
import com.RNFetchBlob.RNFetchBlobPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  private MainPackageConfig mConfig;

  public PackageList(ReactNativeHost reactNativeHost) {
    this(reactNativeHost, null);
  }

  public PackageList(Application application) {
    this(application, null);
  }

  public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig config) {
    this.reactNativeHost = reactNativeHost;
    mConfig = config;
  }

  public PackageList(Application application, MainPackageConfig config) {
    this.reactNativeHost = null;
    this.application = application;
    mConfig = config;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(mConfig),
      new AsyncStoragePackage(),
      new CameraRollPackage(),
      new RNCMaskedViewPackage(),
      new NetInfoPackage(),
      new ReactNativeFirebaseAppPackage(),
      new ReactNativeFirebaseMessagingPackage(),
      new LottiePackage(),
      new ReactNativeBiometricsPackage(),
      new RNCameraPackage(),
      new DocumentPickerPackage(),
      new RNGestureHandlerPackage(),
      new PickerPackage(),
      new ImagePickerPackage(),
      new LinearGradientPackage(),
      new ReactNativeLocalizationPackage(),
      new RNPermissionsPackage(),
      new ReactNativePushNotificationPackage(),
      new ReanimatedPackage(),
      new RestartPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
      new SnackbarPackage(),
      new FingerprintAuthPackage(),
      new VectorIconsPackage(),
      new RNFetchBlobPackage()
    ));
  }
}
