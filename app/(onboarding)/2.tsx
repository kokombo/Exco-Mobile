import OnboardingContainer from "@/components/OnboardingContainer";
import { images } from "@/constants/Images";
import { useRouter } from "expo-router";

const OnboardingScreen2 = () => {
  const router = useRouter();
  return (
    <OnboardingContainer
      title="Games on Exco earn you Solana coins"
      description="You will need to play games in order to earn more Solana Coins to progress in the game"
      buttonLabel="Next"
      onPress={() => router.push("/(onboarding)/3")}
      number={2}
      image={images.onboarding2image}
    />
  );
};

export default OnboardingScreen2;
