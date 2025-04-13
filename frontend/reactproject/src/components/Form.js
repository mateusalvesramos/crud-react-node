import axios from "axios";
import React, { useEffect, useRef } from "react";

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
        <>
            <form ref={ref} onSubmit={handleSubmit}>
                <label>Nome</label>
                <input name="nome"/>

                <label>E-mail</label>
                <input name="email"/>

                <label>CPF</label>
                <input name="cpf"/>

                <label>Fone</label>
                <input name="fone"/>

                <button type="submit">Salvar</button>  
            </form>
        </>
    );
};

export default Form;