import OnboardingContainer from "@/components/OnboardingContainer";
import { images } from "@/constants/Images";

import { useRouter } from "expo-router";

const OnboardingScreen1 = () => {
  const router = useRouter();
  return (
    <OnboardingContainer
      title="Exco app lets you play games and earn Solana Coins"
      description="As you play games and accomplist rewards, you will accumulate Solana Coins"
      buttonLabel="Next"
      onPress={() => router.push("/(onboarding)/2")}
      number={1}
      image={images.onboarding1image}
    />
  );
};

export default OnboardingScreen1;
