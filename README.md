# Front-end Mentor - Age calculator app solution

Esta é uma solução para o [desafio do Age calculator app no Front-end Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9D1s3j7a). Os desafios do Front-end Mentor ajudam-te a melhorar as tuas competências práticas de programação construindo projetos realistas.

## Índice

- [Visão Geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
- [O meu processo](#o-meu-processo)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [O que aprendi](#o-que-aprendi)
- [Autor](#autor)

## Visão Geral

### O desafio

Os utilizadores devem ser capazes de:

- Ver a sua idade em anos, meses e dias após submeterem uma data de nascimento válida através do formulário.
- Ver mensagens de erro de validação caso:
  - Algum campo esteja vazio quando o formulário é submetido.
  - O número do dia ou do mês seja inválido (ex: dia menor que 1 ou maior que 31 / mês menor que 1 ou maior que 12).
  - O ano seja no futuro.
  - A data inteira seja inválida (ex: 31/04/1991, já que abril só tem 30 dias).
- Ver o layout ideal dependendo do tamanho do ecrã do seu dispositivo (Desktop e Mobile).
- Ver estados de *hover* e *focus* em todos os elementos interativos da página.
- **Bónus**: Ver os números a subirem de forma animada a partir do zero até ao valor final.



## O meu processo

### Tecnologias utilizadas

- **HTML5** - Estrutura semântica.
- **CSS3** - Estilização customizada, Flexbox para alinhamento e Media Queries para total responsividade (adaptado para ecrãs mobile como o Pixel 7).
- **JavaScript (ES6+)** - Manipulação do DOM, lógica de validação de datas reais e controlo de cronómetros para efeitos visuais.

### O que aprendi

Durante o desenvolvimento deste projeto, aprofundei conceitos importantes de front-end:

1. **Validação de Datas no JavaScript:** Aprendi a usar o objeto `new Date()` para detetar rasteiras do calendário (como meses que não têm 31 dias) comparando o mês resultante com o mês introduzido pelo utilizador.
2. **Manipulação de Classes Dinâmicas:** Criação de funções auxiliares (`setError` e `resetErrors`) para injetar mensagens de erro e alternar estados visuais no CSS através do `classList`.
3. **Animações Fluidas:** Implementação da função `setInterval` para criar um efeito de contagem progressiva (*counter animation*) que eleva a experiência do utilizador.
4. **Sintonia Fina no CSS:** A importância de bater as classes do HTML à letra com o CSS para evitar problemas de renderização e garantir que elementos fiquem lado a lado no desktop e perfeitamente ajustados em proporção flexível no mobile (`flex: 1`).

## Autor

- Fábio Guardado