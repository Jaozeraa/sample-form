import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import * as S from '@/styles/components/Form';
import { send } from '@/redux-store/Actions/formActions';
import useReduxState from '@/hooks/useReduxState';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { mapAreas, bulletPoint, loading } = useReduxState().form;
  const initialValues = {
    name: '',
    cpf: '',
    email: '',
    message_content: '',
  };

  const handleSubmit = (data: any) => {
    if (
      data.name.length <= 0 ||
      data.cpf.length <= 0 ||
      data.email.length <= 0 ||
      data.message_content.length <= 0 ||
      mapAreas.length <= 0 ||
      !bulletPoint
    )
      return alert('Preencha todos os campos');
    dispatch(
      send({
        form: data,
        mapAreas,
        bulletPoint,
      }),
    );
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {() => (
        <S.Container>
          <S.Input title="Nome" name="name" placeholder="Digite o nome" />
          <S.InputGroup>
            <S.MaskedInput
              containerStyle={{ marginRight: 16 }}
              shouldMarginHorizontal
              title="CPF"
              name="cpf"
              type="cpf"
              mask="999.999.999-99"
              placeholder="Digite o CPF"
            />
            <S.Input
              containerStyle={{ marginLeft: 16 }}
              shouldMarginHorizontal
              title="E-mail"
              name="email"
              type="email"
              placeholder="Digite o e-mail"
            />
          </S.InputGroup>
          <S.Textarea
            title="Conteúdo da mensagem"
            name="message_content"
            placeholder="Digite o conteúdo da mensagem"
          />
          <footer>
            <S.Button type="submit" isLoading={loading}>
              Cadastrar agora
            </S.Button>
          </footer>
        </S.Container>
      )}
    </Formik>
  );
};

export default Form;
