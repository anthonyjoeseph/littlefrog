package com.littlefrog;

import android.app.Application;
import android.util.Log;
import android.app.Activity;
import android.os.Bundle;

import com.facebook.react.ReactApplication;
import com.zmxv.RNSound.RNSoundPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.github.yamill.orientation.OrientationPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication, Application.ActivityLifecycleCallbacks {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSoundPackage(),
            new OrientationPackage(mCurrentActivity)
      );
    }
  };

  private Activity mCurrentActivity;

  @Override
   public void onCreate() {
       super.onCreate();
       SoLoader.init(this, /* native exopackage */ false);
       registerActivityLifecycleCallbacks(this);
   }
  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onActivityCreated(Activity a, Bundle savedInstanceState) {
    mCurrentActivity = a;
  }

  @Override
  public void onActivityDestroyed(Activity a){
    mCurrentActivity = a;
  }

  @Override
  public void onActivitySaveInstanceState(Activity a, Bundle b){
    mCurrentActivity = a;
  }

  @Override
  public void onActivityStopped(Activity a){
    mCurrentActivity = a;
  }

  @Override
  public void onActivityPaused(Activity a){
    mCurrentActivity = a;
  }

  @Override
  public void onActivityResumed(Activity a){
    mCurrentActivity = a;
  }

  @Override
  public void onActivityStarted(Activity a){
    mCurrentActivity = a;
  }
}
