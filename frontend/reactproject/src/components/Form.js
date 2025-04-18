import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useRef } from "react";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        // Verifica se foi clicado na tabela (grid) para editar um usuário.
        if(onEdit) {
            // "ref" referencia os campos do fomulário. Com isso, quando o botão de edição for clicando, o formulário será preenchido com as informações do usuário a ser editado.
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.cpf.value = onEdit.cpf;
            user.fone.value = onEdit.fone
        }
    }, [onEdit])

    // 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        // Se todos os campos não estiverem preenchidos imprime a mensagem para preecher todos os campos.
        if(!user.nome.value || !user.email.value || !user.cpf.value || !user.fone.value)
        {
            // Colocar pop-up ou toast futuramente
            return console.log("Preencha todos os campos!");
        }

        // Caso seja uma edição...
        if(onEdit){
            await axios
                .put("http://localhost:8800/" + onEdit.id, {
                    // Esta informações no body serão recebidas pelo Controllers/users.js.
                    nome: user.nome.value,
                    email: user.email.value,
                    cpf: user.cpf.value,
                    fone: user.fone.value,
                })
                // Colocarei pop-up ou toast futuramente nestas mensagens de sucesso ou de erro.

                // Em caso de ter sucesso.
                .then(({ data }) => console.log(data))
                // Em caso de erro.
                .catch(({ data }) => console.log(data));
        }   else{ // Caso não seja uma edição, seja uma nova inclusão...
            await axios
                .post("http://localhost:8800", {
                    nome: user.nome.value,
                    email: user.email.value,
                    cpf: user.cpf.value,
                    fone: user.fone.value,
                })
                // Em caso de ter sucesso.
                .then(({ data }) => console.log(data))
                // Em caso de erro.
                .catch(({ data }) => console.log(data));
        }

        // Após a atualização ou adição, realizamos a limpeza do formulário.
        user.nome.value = "";
        user.email.value = "";
        user.cpf.value = "";
        user.fone.value = "";

        setOnEdit(null);
        getUsers();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
                <InputArea> <label>Nome</label><Input name="nome"/> </InputArea>
                
                <InputArea> <label>E-mail</label><Input name="email"/> </InputArea>
                
                <InputArea> <label>CPF</label><Input name="cpf"/> </InputArea>
                
                <InputArea> <label>Fone</label><Input name="fone"/> </InputArea>

                <Button type="submit">Salvar</Button>  
        </FormContainer>
    );
};

export default Form;