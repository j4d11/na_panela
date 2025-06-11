#  Na Panela - App de Receitas

Este é um aplicativo de receitas desenvolvido como parte do projeto da disciplina. O objetivo é oferecer uma experiência simples e agradável para explorar receitas por categoria, conhecer chefs fictícios e visualizar detalhes das receitas.

## ⚠️ Aviso Importante sobre o Firebase

> A integração com o **Firebase** foi planejada e parcialmente configurada, mas por limitações técnicas e de tempo, **não foi possível finalizá-la com sucesso**.
> 
> As telas de **login, cadastro e perfil** estão funcionando apenas **de forma visual**. Elas não se conectam ao backend e **não realizam autenticação real**.
> 
> As ações como "Criar Conta", "Entrar" e alterar nome/e-mail são simuladas e não persistem dados.

---

## ✅ Funcionalidades Atuais

### Navegação
- O app conta com navegação funcional entre todas as telas.
- Drawer lateral permite acessar o perfil e a tela principal.

### Categorias
- As categorias são carregadas corretamente.
- A **barra de busca** funciona e filtra receitas por nome.
- Os botões de categoria levam a uma listagem filtrada pela API.

### Tela "Chefes"
- Cada "chef" possui um perfil fictício.
- Ao tocar em uma receita listada no perfil de um chef, o app navega para os **detalhes da receita real**, com imagem, descrição e dados vindos da API.

### Receita do Dia
- A "Receita do Dia" é **ilustrativa** e estática (por exemplo, mostra "Mac & Cheese").
- **Não é clicável** como as demais receitas.

###  API de Receitas
- As receitas são consumidas de uma **API externa (TheMealDB)**, que está em inglês.
- Por isso, os nomes e descrições das receitas estão nesse idioma.

### Avaliação
- A avaliação (nota/estrela) está presente nos cards de receita, mas **não é funcional**. Não envia ou armazena nenhuma nota real.

---

## Imagens e Estilo
- O app utiliza **componentes visuais personalizados**, ícones do Expo (AntDesign, MaterialIcons), e imagens ilustrativas para categorias e chefs.
- Paleta de cores suave com fundo rosa claro e elementos em tons de vinho e branco.

---

