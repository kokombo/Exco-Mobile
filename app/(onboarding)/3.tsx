import OnboardingContainer from "@/components/OnboardingContainer";
import { images } from "@/constants/Images";
import { useRouter } from "expo-router";
const OnboardingScreen3 = () => {
  const router = useRouter();
  return (
    <OnboardingContainer
      title="Games on Exco earn you Solana coins"
      description="You will need to play games in order to earn more Solana Coins to progress in the game"
      buttonLabel="Gt Started"
      onPress={() => router.push("/(onboarding)/signin")}
      number={3}
      image={images.onboarding3image}
    />
  );
};

export default OnboardingScreen3;
