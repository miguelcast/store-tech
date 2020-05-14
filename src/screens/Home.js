import React from 'react';
import { SafeAreaView } from "react-native";

import Text from "../components/Text";

function Home() {
  return (
    <SafeAreaView>
      <Text variant="title">
        Store tech!
      </Text>
      <Text variant="subtile">
        Mobiles
      </Text>
      <Text>
        The best mobile
      </Text>
    </SafeAreaView>
  );
}

export default Home;
