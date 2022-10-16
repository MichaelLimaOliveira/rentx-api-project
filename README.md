# Cadastro de carro
**Requisitos funcionais**
  Deve ser possível cadastrar um novo carro.
  Deve ser posível listar todas as categorias.

**Regra de negocio** 
  Não deve ser possível cadastrar um carro com uma placa já existente.
  Não deve ser possível alterar a placa de um carro já existente.
  O carro deve ser cadastrado, por padrão, com disponibilidade.
  O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisitos funcionais**
  Deve ser possível listar todos os carros disponíveis.
  Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
  Deve ser possível listar todos os carros disponíveis pelo nome da marca.
  Deve ser possível listar todos os carros disponíveis pelo nome do carro.


**Regra de negocio**
  O usuário não precisa estar logado no sistema.


# Cadastro de expecificação no carro

**Requisitos funcionais**
  Deve ser possível cadastrar uma expecificação para o carro.
  Deve ser possível listar todas as expecificações.
  Deve ser possível listar todos os carros.

**Regra de negocio**
  Não deve ser possível cadastrar uma expecificação para um carro já cadastrado.
  Não deve ser possível cadastrar uma expecificação já existente para o mesmo carro.
  O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagem do carro

**Requisitos funcionais**
  Deve ser possível cadastrar a imagem do carro.
  Deve ser possível listar todos os carros.

**Requisitos não funcionais**
  Utilizar o multer para upload de arquivos.

**Regra de negocio**
  O usuário deve poder cadastrar mais de uma imagen para o mesmo carro.
  O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos funcionais**
  Deve ser possível cadastrar um aluguel.

**Regra de negocio**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possível cadastar um novo aluguel caso já exista um aberto para o mesmo carro.
Náo deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.