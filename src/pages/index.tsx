import React, { useEffect } from 'react';
import * as S from '@/styles/pages/Home';
import useReduxState from '@/hooks/useReduxState';
import AutoCompleteInput from '@/components/AutoCompleteInput';

const Home: React.FC = () => {
  const { error } = useReduxState().form;

  useEffect(() => {
    if (error) {
      alert(error);
    }
  });

  return (
    <S.Container>
      <div>
        <h1>Cadastro</h1>
        <AutoCompleteInput title="Endereço" placeholder="Digite o endereço" />
        <S.Map />
        <S.Form />
      </div>
    </S.Container>
  );
};

export default Home;
