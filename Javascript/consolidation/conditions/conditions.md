true ET true ; TRUE
true ET false ; FALSE
false OU true ; TRUE
true OU false ; TRUE
(true ET false) OU true ; TRUE
(true OU false) ET true ; TRUE
!false ; TRUE
!true ; FALSE
!(true OU false) ; FALSE
!(true ET false) ; TRUE
(age < 25 ET nb >= 10), l'utilisateur saisit age = 15 et nb = 30 ; TRUE (15 < 25 ET 30 >= 10)
(age == 18 OU nb != 10), l'utilisateur saisit age = 15 et nb = 30 ; TRUE (30 != 10)
(age == 18 OU age == 30 OU age != 15), l'utilisateur saisit 15 ; FALSE
(age == 18 OU age == 30 OU age != 15), l'utilisateur saisit 25 ; TRUE (age != 15)
!(age == 18 OU age == 30 OU age != 15), l'utilisateur saisit 18 ; TRUE (age == 18)
!(age == 18 OU age == 30 OU age != 15), l'utilisateur saisit 30 ; TRUE (age == 30)
(annee == 2022 ET mois == "novembre" ET jour == "14"), donnez les valeurs d'année, mois et jour qui permettent d'évaluer la condition à vrai ; (annee = 2022, mois = "novembre", jour = "14")
EstIlUneAnneeBixetile(2022) ; FALSE
EstIlUneAnneeBixetile(2028) ; TRUE
EstIlUneAnneeBixetile(2017) OU EstIlImpair(2017) . TRUE (EstIlImpair(2017))