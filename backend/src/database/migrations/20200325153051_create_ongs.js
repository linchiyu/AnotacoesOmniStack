/*criação da tabela ong
up = quando rodar a migration, tudo que deve ser feito*/
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    table.timestamps();
  })
};

/*quando alguma coisa da migration não der certo
down = o que é necessário fazer para voltar atrás*/
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
