 'use strict';


var app = angular.module('aplication', []);
  

        app.controller('controlSkiJump', ['$scope', '$filter' , function($scope) {

          $scope.addJumper = function(){
            $scope.skoczkowie.splice( 0, 0, { Name : $scope.jumper} )
            
        }; 
          $scope.deleteJumper = function($index){
            $scope.skoczkowie.splice($index, 1 )
        };
        $scope.edit = false

            $scope.skoczkowie =  [
                                {
                                  "Rank": 1,
                                  "Bib": 38,
                                  "Name": "GEIGER Karl",
                                  "TotPoints": 269.4
                                },
                                {
                                  "Rank": 2,
                                  "Bib": 41,
                                  "Name": "KLIMOV Evgeniy",
                                  "TotPoints": 265
                                },
                                {
                                  "Rank": 3,
                                  "Bib": 36,
                                  "Name": "KUBACKI Dawid",
                                  "TotPoints": 261.1
                                },
                                {
                                  "Rank": 4,
                                  "Bib": 39,
                                  "Name": "ZYLA Piotr",
                                  "TotPoints": 253.5
                                },
                                {
                                  "Rank": 5,
                                  "Bib": 40,
                                  "Name": "STOCH Kamil",
                                  "TotPoints": 250.6
                                },
                                {
                                  "Rank": 6,
                                  "Bib": 32,
                                  "Name": "HULA Stefan",
                                  "TotPoints": 250
                                },
                                {
                                  "Rank": 7,
                                  "Bib": 37,
                                  "Name": "KOBAYASHI Ryoyu",
                                  "TotPoints": 249.5
                                },
                                {
                                  "Rank": 8,
                                  "Bib": 33,
                                  "Name": "WOLNY Jakub",
                                  "TotPoints": 244.4
                                },
                                {
                                  "Rank": 9,
                                  "Bib": 13,
                                  "Name": "LEYHE Stephan",
                                  "TotPoints": 242.4
                                },
                                {
                                  "Rank": 10,
                                  "Bib": 27,
                                  "Name": "KOT Maciej",
                                  "TotPoints": 241.7
                                },
                                {
                                  "Rank": 11,
                                  "Bib": 14,
                                  "Name": "FETTNER Manuel",
                                  "TotPoints": 240.4
                                },
                                {
                                  "Rank": 12,
                                  "Bib": 29,
                                  "Name": "TAKEUCHI Taku",
                                  "TotPoints": 240.3
                                },
                                {
                                  "Rank": 13,
                                  "Bib": 8,
                                  "Name": "POLASEK Viktor",
                                  "TotPoints": 240.2
                                },
                                {
                                  "Rank": 14,
                                  "Bib": 24,
                                  "Name": "ZOGRAFSKI Vladimir",
                                  "TotPoints": 238.8
                                },
                                {
                                  "Rank": 15,
                                  "Bib": 25,
                                  "Name": "KOBAYASHI Junshiro",
                                  "TotPoints": 238.2
                                },
                                {
                                  "Rank": 16,
                                  "Bib": 21,
                                  "Name": "PASCHKE Pius",
                                  "TotPoints": 236.4
                                },
                                {
                                  "Rank": 17,
                                  "Bib": 11,
                                  "Name": "SCHWANN Mika",
                                  "TotPoints": 234.9
                                },
                                {
                                  "Rank": 18,
                                  "Bib": 34,
                                  "Name": "VASSILIEV Dmitriy",
                                  "TotPoints": 233.2
                                },
                                {
                                  "Rank": 19,
                                  "Bib": 7,
                                  "Name": "PREVC Domen",
                                  "TotPoints": 230.8
                                },
                                {
                                  "Rank": 20,
                                  "Bib": 26,
                                  "Name": "KOFLER Andreas",
                                  "TotPoints": 229.4
                                },
                                {
                                  "Rank": 21,
                                  "Bib": 28,
                                  "Name": "TOCHIMOTO Shohei",
                                  "TotPoints": 228.2
                                },
                                {
                                  "Rank": 22,
                                  "Bib": 23,
                                  "Name": "INSAM Alex",
                                  "TotPoints": 227.8
                                },
                                {
                                  "Rank": 23,
                                  "Bib": 12,
                                  "Name": "HOERL Jan",
                                  "TotPoints": 226.6
                                },
                                {
                                  "Rank": 24,
                                  "Bib": 18,
                                  "Name": "NAZAROV Mikhail",
                                  "TotPoints": 225.5
                                },
                                {
                                  "Rank": 25,
                                  "Bib": 31,
                                  "Name": "SATO Yukiya",
                                  "TotPoints": 225
                                },
                                {
                                  "Rank": 26,
                                  "Bib": 15,
                                  "Name": "SCHIFFNER Markus",
                                  "TotPoints": 224.9
                                },
                                {
                                  "Rank": 27,
                                  "Bib": 16,
                                  "Name": "TKACHENKO Sergey",
                                  "TotPoints": 222.3
                                },
                                {
                                  "Rank": 28,
                                  "Bib": 9,
                                  "Name": "HAZETDINOV Ilmir",
                                  "TotPoints": 221.4
                                },
                                {
                                  "Rank": 29,
                                  "Bib": 2,
                                  "Name": "RUPITSCH Markus",
                                  "TotPoints": 220.2
                                },
                                {
                                  "Rank": 30,
                                  "Bib": 22,
                                  "Name": "HLAVA Lukas",
                                  "TotPoints": 116.2
                                },
                                {
                                  "Rank": 31,
                                  "Bib": 4,
                                  "Name": "CHOI Heung Chul",
                                  "TotPoints": 105.1
                                },
                                {
                                  "Rank": 32,
                                  "Bib": 1,
                                  "Name": "BRESADOLA Davide",
                                  "TotPoints": 103.4
                                },
                                {
                                  "Rank": 33,
                                  "Bib": 3,
                                  "Name": "COLLOREDO Sebastian",
                                  "TotPoints": 75.1
                                }
                               
            ]
        }]);