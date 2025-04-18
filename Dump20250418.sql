-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: crud_trab1
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fone` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=425 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (325,'Ms. Joyce Welch','82058','Kiel.Tillman@gmail.com','53276'),(326,'Ernestine Kemmer','07241-5060','Erick_Stehr@hotmail.com','66513'),(327,'Jerry Doyle','72084','Marjorie_Cartwright20@yahoo.com','20273-3199'),(328,'Carlos Hayes','40791-6605','Chloe_Altenwerth-Hoppe@yahoo.com','42142'),(329,'Rosa Cormier','97809','Axel33@gmail.com','73005'),(330,'Lillian Baumbach','53002','Elinore_Kuvalis@yahoo.com','81529-6385'),(331,'Terrell Lesch','05649-4376','Jarrett77@yahoo.com','75965-8392'),(332,'Darryl Bailey','57669-8817','Daniella_Metz@hotmail.com','87543-5008'),(333,'Kari Koch','13427','Jordyn.Stehr@gmail.com','43460'),(334,'Nathan Stiedemann','22922-3765','Landen.Mayert-Breitenberg67@yahoo.com','95459-4533'),(335,'Dr. Terry Kreiger','45827-1506','Patience.Mann30@hotmail.com','23308-9765'),(336,'Julio Lynch','51394','Dannie.Ernser@hotmail.com','56490-0362'),(337,'Blanca Dickens','59008','Jace.Herzog38@hotmail.com','26609-8291'),(338,'Hugh Cormier','16393-4990','Mack.Spencer@hotmail.com','82938'),(339,'Karen Emard','69054','Helena36@hotmail.com','71936-2703'),(340,'Laurie Dare','11005','Benny34@hotmail.com','72594'),(341,'Pamela Stehr','20699-5846','Clifford.Mayert@hotmail.com','02572-1314'),(342,'Denise Douglas','55546','Zoey.Ankunding@gmail.com','33216-8163'),(343,'Susan O Connell','56614-3194','Roselyn.Feeney@hotmail.com','82713'),(344,'Felipe Littel','82288','Micaela32@gmail.com','94353-5325'),(345,'Ruth Hayes','52404-1600','Noel.Cartwright2@yahoo.com','56624'),(346,'Marilyn Wolff','99553','Mariah_Denesik-Lueilwitz35@yahoo.com','40471-9009'),(347,'Lionel Schimmel','87265-0415','Dolly.Kovacek92@gmail.com','36633'),(348,'Ismael McLaughlin','94059-3944','Madelyn.Rolfson@hotmail.com','27571'),(349,'Madeline Schumm','58947-0639','Arch.Lindgren@yahoo.com','81030'),(350,'Gayle Runte','37121','Garett.Ziemann@gmail.com','41035-9060'),(351,'Micheal Collier-Schoen','35769','Lazaro.Gerlach@gmail.com','18474-9200'),(352,'Mrs. Brandy Wisoky','37087','Elmer_Lesch@gmail.com','44249'),(353,'Tim OConner','99801-8745','Anissa_Rowe14@yahoo.com','86526'),(354,'Cameron Jacobi Jr.','91113','Shyanne.Shields42@gmail.com','39049-8908'),(355,'Nadine Hyatt-Hodkiewicz','25740-8068','Efrain.Jacobs@gmail.com','65424-4079'),(356,'Kimberly Gerhold Sr.','51351','Minnie22@gmail.com','63431-6403'),(357,'Mr. Shaun Lakin','66936-4371','Bette.Rutherford@gmail.com','80662'),(358,'Rex Prosacco','24434','Estella.Dietrich70@hotmail.com','90254-8532'),(359,'Viola Lubowitz','40845','Alberto.Shanahan58@gmail.com','55018-7599'),(360,'Marcos Volkman','87620-3230','Arvilla.Hansen@hotmail.com','17327'),(361,'Jeremiah Kuhlman','36673','Orland75@gmail.com','15607'),(362,'Felix Jacobson','52941-7817','Emery92@hotmail.com','60045-2355'),(363,'Mr. Hugo Bartoletti','69592-3114','Camila32@yahoo.com','86812'),(364,'Flora Moore','17088-9804','Corine79@yahoo.com','62091'),(365,'Noah Gislason Jr.','86040-9121','Sincere_Jacobi66@hotmail.com','59214-6493'),(366,'Betsy Mitchell','94440-1146','Rylee28@hotmail.com','49230'),(367,'Mike Weissnat','96932-2356','Axel84@gmail.com','38953'),(368,'June Bins','04037-0579','Marielle.Hoeger@hotmail.com','75144-0398'),(369,'Rex Lowe I','11025-6312','Lew10@hotmail.com','08876'),(370,'Katherine Ritchie II','01655','Alvina_OConner88@yahoo.com','37803-3238'),(371,'Toby Will','10618-9611','Brice.Will82@gmail.com','94819-7149'),(372,'Michael Rolfson-Murphy','13214-6797','Nella_Ankunding@hotmail.com','25962'),(373,'Dr. Naomi Hand','87826-4335','Minerva_Gibson91@hotmail.com','47683-3402'),(374,'Dr. Kathryn Conn','63810-2206','Marlen_Hyatt0@hotmail.com','82860-3454'),(375,'Lee Zboncak Sr.','96250-2245','Bell67@yahoo.com','18535'),(376,'Regina Becker','79738-4216','Jude_Stehr72@hotmail.com','75167'),(377,'Hector Sauer','33638-3166','Cale.Harber53@gmail.com','58530-7281'),(378,'Darlene Franey','64340-3859','Carmela20@yahoo.com','86919'),(379,'Jared Heaney','69910-7954','Deborah.Schuster77@gmail.com','05840-6059'),(380,'Orville Cummings','35438','Marianna97@hotmail.com','44603-1657'),(381,'June DAmore','86252','Mavis71@gmail.com','30900'),(382,'Fred Cartwright','54649','Fannie.Stanton@yahoo.com','72988'),(383,'Tomas Vandervort','86706','Dillon.Nader@gmail.com','97329'),(384,'Justin Pagac','12712','Ozella_Kutch87@hotmail.com','49418'),(385,'Danny Rolfson','32480','Zoie35@gmail.com','92755'),(386,'Estelle Hintz','56171','Gaetano48@yahoo.com','04855-6765'),(387,'Miss Stacy Ferry','85733','Garrett_Zulauf@yahoo.com','08497'),(388,'Wilson Franecki','07653','Fabiola_Monahan79@hotmail.com','63526-1965'),(389,'Elsie Reinger','81967','Winston56@yahoo.com','41917'),(390,'Carl Rice','23216','Aliya.Stehr@hotmail.com','86382-4529'),(391,'Dr. Natasha Baumbach','09898-2644','Agnes_Zemlak17@gmail.com','49925-1403'),(392,'Merle Daniel','36075-1815','Micah13@gmail.com','93579'),(393,'Micheal Davis','74847','Dameon18@yahoo.com','29689'),(394,'Oscar Lindgren','13133-0262','Hollis40@gmail.com','62195-0351'),(395,'Eleanor Crona','32879','Daren_Hyatt@hotmail.com','44353-0252'),(396,'John Bogan','87800-9195','Bernice_Wiza@hotmail.com','17518'),(397,'Dr. Walter Watsica','47312','Kamryn.Okuneva97@hotmail.com','50468-2963'),(398,'Garrett Hermann','99018-7644','Yolanda_Walter@hotmail.com','03960-3300'),(399,'Owen Jones','26101','Vicky65@gmail.com','23225'),(400,'Larry Abernathy','51774','Philip_Cremin37@gmail.com','53894'),(401,'Hilda Considine','14447','Cornell.Cartwright@gmail.com','09246'),(402,'Mona Sawayn','04675-2146','Zelma_Upton23@yahoo.com','78804'),(403,'Vivian Heidenreich Jr.','40327-4275','Eulah_Glover55@gmail.com','37881-2809'),(404,'Jean Roob','27221','Micheal99@gmail.com','61109-1657'),(405,'Molly Pacocha','54272','Napoleon.Raynor@yahoo.com','88817-7740'),(406,'Kelvin Heaney DDS','47616-5475','Felix_Rempel@hotmail.com','62764'),(407,'Marcella Kris','81723','Kayleigh80@yahoo.com','64144'),(408,'Nellie Davis','46447-7174','Logan_Connelly@yahoo.com','24357'),(409,'Orville Macejkovic','31787-2083','Liam.Gorczany@yahoo.com','70387-4403'),(410,'Stephanie Heidenreich','26138','Loyce.Towne46@gmail.com','94455-4016'),(411,'Jim Kemmer','49057','Devan_Mante@yahoo.com','93978'),(412,'Terry Lindgren','26672-0251','Reinhold62@gmail.com','98982-9573'),(413,'Melanie Williamson','20273','Dejuan.Goyette-Weber11@gmail.com','02959-1200'),(414,'Lana Schmidt','99612','Kailee_Becker62@gmail.com','90760-1956'),(415,'Christina Botsford','32491','Darrion.Wisozk81@hotmail.com','08052-5315'),(416,'Debra Leuschke','68781-8206','Lorenza84@yahoo.com','37219-5433'),(417,'Gerard Breitenberg-Schumm','81580-3264','Allie55@hotmail.com','57739'),(418,'Tonya Kautzer','06306-5537','Virgil76@yahoo.com','73179-3397'),(419,'Todd Hermann','23967-2408','Keith74@gmail.com','46927-6917'),(420,'Daisy Johnson','10062','Otilia9@yahoo.com','10580-4045'),(421,'Stephanie Hane','18852','Assunta.Friesen54@gmail.com','52520'),(422,'Lora Welch','19289-0157','Richard56@gmail.com','35205-5851'),(423,'Vernon Johnson','21870','Golda14@gmail.com','42583'),(424,'Claudia Kuhic','32960','Eino8@hotmail.com','71432');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-18 18:39:53
