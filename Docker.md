## Rodando uma nova versão do container

Para rodar uma nova versão do container, basta rodar o comando `docker run` com a tag da nova versão. Por exemplo, para rodar a versão 2.0.0 do container `my-container`, basta rodar o comando:
Não se esqueça de rodar na raíz do projeto Backend.

```bash
docker compose up -d
```

or

```bash
docker-compose up -d --build
```

## Rodar as migrations

```bash
node ace migration:run
```

## Rodar as seeds

```bash
node ace db:seed
```
