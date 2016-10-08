create database teachei
default character set utf8
default collate utf8_general_ci;

create table curso (
nome varchar(30) not null,
cod_curso integer primary key auto_increment
);

create table turma (
cod_turma integer primary key auto_increment,
periodo integer not null,
turno char(2) not null,
cod_curso integer not null,
constraint FK_turma_curso
foreign key (cod_curso)
references curso(cod_curso)
);

create table disciplina (
nome_disciplina varchar(100) not null,
cod_disciplina integer primary key auto_increment,
cod_turma integer not null,
constraint FK_disciplina_turma foreign key (cod_turma) references turma(cod_turma)
);

create table professor (
nome varchar(30) not null,
senha password(30) not null,
matricula integer primary key,
cpf varchar(11) primary key
);

create table aula (
sala varchar(10) not null,
data_aula date not null,
hora_inicio time not null,
cod_aula integer primary key auto_increment,
cod_turma integer not null,
constraint FK_aula_turma foreign key (cod_turma) references turma(cod_turma),
matricula integer not null,
constraint FK_aula_professor foreign key (matricula) references professor(matricula),
cod_disciplina integer not null,
constraint FK_aula_disciplina foreign key (cod_disciplina) references disciplina(cod_disciplina)
);

create table admin(
usuario varchar(30) primary key,
senha password(30) primary key
);
