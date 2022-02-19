CREATE TABLE Admin(
    id serial not null primary key,
    login varchar(256) not null ,
    mdp varchar(256) not null 
);
INSERT INTO Admin VALUES(1,'administrateur','administrateur');
CREATE TABLE Province(
    idProvince serial not null primary key,
    nomProvince varchar(50)
);
CREATE TABLE Region (
    idRegion serial not null primary key,
    idProvince int not null references Province(idProvince),
    nomRegion varchar(256) not null ,
    mdp varchar(256) not null );
INSERT INTO Province(idProvince,nomProvince) VALUES
(1,'Antsiranana'),
(2,'Mahajanga'),
(3,'Toamasina'),
(4,'Antananarivo'),
(5,'Fianarantsoa'),
(6,'Toliara');
INSERT INTO Region(idProvince,nomRegion,mdp) VALUES
(1,'Diana','Antsiranana'),
(1,'Sava','Antsiranana'),
(4,'Itasy','Antananarivo'),
(4,'Analamanga','Antananarivo'),
(4,'Vakinakaratra','Antananarivo'),
(4,'Bongolava','Antananarivo'),
(2,'Sofia','Mahajanga'),
(2,'Boeny','Mahajanga'),
(2,'Betsiboka','Mahajanga'),
(2,'Melaky','Mahajanga'),
(3,'Alaotra-Mangoro','Toamasina'),
(3,'Atsinanana','Toamasina'),
(3,'Analanjirofo','Toamasina'),
(5,'Amoron i Mania','Fianarantsoa'),
(5,'Haute Matsiatra','Fianarantsoa'),
(5,'Vatovavy','Fianarantsoa'),
(5,'Fitovinany','Fianarantsoa'),
(5,'Atsimo-Atsinanana','Fianarantsoa'),
(5,'Ihorombe','Fianarantsoa'),
(6,'Menabe','Toliara'),
(6,'Atsimo-Andrefana','Toliara'),
(6,'Androy','Toliara'),
(6,'Anosy','Toliara');
CREATE TABLE Utilisateur(
    idUtilisateur  serial not null primary key,
    nom varchar(256) not null,
    prenom varchar(256) not null,
    email varchar(256),
    dateNaissance date not null,
    mdp varchar(256) not null,
    sexe varchar(10) not null
);
INSERT INTO Utilisateur(idUtilisateur,nom,prenom,email,dateNaissance,mdp,sexe) VALUES
(1,'rakotonarivo','ravaka','ravaka@gmail.com','2000-10-11','123','feminin');

CREATE TABLE TypeSignalement(
    idTypeSignalement  serial not null primary key,
    nomTypeSignalement  varchar(256)
);
INSERT INTO TypeSignalement(idTypeSignalement,nomTypeSignalement) VALUES
(1,'dorotanety'),
(2,'haintany'),
(3,'fiangonanyFako'),
(4,'corona');
CREATE TABLE Signalement(
    idSignalement  serial not null primary key,
    idUtilisateur int not null references Utilisateur(idUtilisateur),
    idRegion int not null references Region(idRegion),
    dateSignalement date,
    description varchar(256) not null,
    idTypeSignalement int not null references TypeSignalement(idTypeSignalement),
    status int not null 
);
CREATE TABLE Photo(
    idPhoto  serial not null primary key,
    idSignalement int not null references Signalement(idSignalement),
    nomPhoto varchar(256)
);
INSERT INTO Signalement(idSignalement,idUtilisateur,idRegion,dateSignalement,description,idTypeSignalement,status) VALUES
(1,1,10,'2022-01-11','Les feux de brousse ont bruler les paturages  detruit le betail et rase les vignobles Leur repousse et reprise seront susceptibles d ajouter un stress supplementaire aux ressources en eau deja mises a mal par la secheresse','1',0),
(2,1,20,'2022-01-01','Les secheresses impactent fortement l agriculture Le manque d eau dans les sols entraine de lourdes consequences sur les recoltes s il n est pas compense par l irrigation','2',0),
(3,1,14,'2022-01-02','L accumulation des dechets engendre des nuisances multiples  une degradation du cadre de vie économique sanitaire une pollution de l environnement et une dégradation ecologique','3',0),
(4,1,22,'2022-01-15','Fermetures d entreprises  perturbations des marches et suppressions d emplois  les mesures de confinement conduisent a d immenses pertes de revenus','4',0);
INSERT INTO Photo(idPhoto,idSignalement,nomPhoto) VALUES
(1,1,'dorotany.jpg'),
(2,1,'dorotany2.jpg'),
(3,1,'dorotany3.jpg'),
(4,2,'secheresse.jpg'),
(5,2,'secheresse2.jpg'),
(6,2,'secheresse,jpg'),
(7,3,'fako1'),
(8,3,'fako2'),
(9,4,'fako3'),
(10,4,'corona1.webp'),
(11,4,'corona2.jpg'),
(12,4,'corona3.jpg');

