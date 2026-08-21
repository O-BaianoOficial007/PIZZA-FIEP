import { useState } from "react";

export default function Contato(){
    const [nome, setNome] = use('');
    const [email, setEmail] = use('');
    const [mensagem, setMensagem] = use('');

    const enviarWhatsApp = (e) =>{
        e.preventDefault(); //nao deixa recarregar a pagina
        const telefone = '5573991436072'
        const texto = `Olá!\nMeu nome é ${nome}\nMeu email é ${email}\nMensagem ${mensagem}`;
        const textoCodificado = EncodedURIComponent(texto);
        const whatsappURL = `https://wa.me/${telefone}?text=$`
    }
}