CREATE DATABASE ACL

CREATE TABLE Users(
    userName varchar(50) not null,
    userPassword varchar(50) not null,
    userRole varchar (20) not null,
    CONSTRAINT pk_username PRIMARY KEY(userName),
    CONSTRAINT fk_userrole FOREIGN KEY(userRole) REFERENCES RolePermisions(roleName)
)

CREATE TABLE RolePermisions(
    roleName varchar(20) not null,
    get boolean not null,
    post boolean not null,
    put boolean not null,
    patch boolean not null,
    delete boolean not null,
    CONSTRAINT pk_roleName PRIMARY KEY(roleName)
)

INSERT INTO RolePermisions(roleName,get,post,put,patch,delete) VALUES (
    ("admin",true,true,true,true,true),
    ("seller",true,true,true,true,false),
    ("supporter",true,false,false,false,true),
    ("customer",true,false,false,false,false)
)