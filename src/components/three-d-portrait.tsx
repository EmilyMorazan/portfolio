import { Image, type ImageSource } from 'expo-image';
import { StyleSheet } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@/hooks/use-theme';

type ThreeDPortraitProps = {
  source: ImageSource;
};

export function ThreeDPortrait({ source }: ThreeDPortraitProps) {
  const theme = useTheme();
  const movement = useSharedValue(0);
  const orbit = useSharedValue(0);

  movement.value = withRepeat(
    withSequence(
      withTiming(1, { duration: 2600, easing: Easing.inOut(Easing.sin) }),
      withTiming(0, { duration: 2600, easing: Easing.inOut(Easing.sin) }),
    ),
    -1,
    false,
  );

  orbit.value = withRepeat(
    withTiming(1, { duration: 12000, easing: Easing.linear }),
    -1,
    false,
  );

  const stageStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 900 },
      { rotateX: `${interpolate(movement.value, [0, 1], [-3, 3])}deg` },
      { rotateY: `${interpolate(movement.value, [0, 1], [-7, 7])}deg` },
      { translateY: interpolate(movement.value, [0, 1], [3, -3]) },
    ],
  }));

  const ringStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 900 },
      { rotateX: '62deg' },
      { rotateZ: `${interpolate(orbit.value, [0, 1], [0, 360])}deg` },
    ],
  }));

  return (
    <Animated.View style={[styles.stage, stageStyle]}>
      <Animated.View
        style={[
          styles.orbit,
          ringStyle,
          { borderColor: theme.backgroundSelected },
        ]}
      />
      <Animated.View
        style={[
          styles.orbitAccent,
          ringStyle,
          { borderColor: theme.border },
        ]}
      />
      <Animated.View
        style={[
          styles.portraitFrame,
          {
            backgroundColor: theme.backgroundAccent,
            borderColor: theme.backgroundElement,
          },
        ]}
      >
        <Image source={source} style={styles.portrait} contentFit="cover" />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  stage: {
    width: 172,
    height: 172,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orbit: {
    position: 'absolute',
    width: 168,
    height: 72,
    borderWidth: 2,
    borderRadius: 100,
    opacity: 0.9,
  },
  orbitAccent: {
    position: 'absolute',
    width: 148,
    height: 62,
    borderWidth: 1,
    borderRadius: 100,
    opacity: 0.7,
  },
  portraitFrame: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 5,
    padding: 4,
    transform: [{ translateZ: 18 }],
  },
  portrait: {
    width: '100%',
    height: '100%',
    borderRadius: 58,
  },
});