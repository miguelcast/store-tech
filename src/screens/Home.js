import React from 'react';
import { SafeAreaView, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import Text from "../components/Text";
import { logout } from '../store/authSlice';
import ProductList from '../components/Product/List';

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth?.user?.name);
  return (
    <SafeAreaView>
      <Text variant="title">
        Hello {userName}
      </Text>
      {!!userName && (
        <Button title="Cerrar sesión" onPress={() => dispatch(logout())} />
      )}
      <ProductList />
    </SafeAreaView>
  );
}

export default Home;
