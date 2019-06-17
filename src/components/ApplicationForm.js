import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PreviousResidenceForm from "./PreviousResidenceForm"


var consultants = [
  "Not Sure",
  "Amy B",
  "Andee M",
  "Axel C",
  "Calvin V",
  "Daniel C",
  "Deaken B",
  "Diamond R",
  "Edgar M",
  "Elizabeth R",
  "Eric D",
  "Jamie N",
  "Jared A",
  "Jared H",
  "Jeremy F",
  "Justin L",
  "Kara P",
  "Karyn Z",
  "Lauren B",
  "Lucy K",
  "Mariah N",
  "Oscar R",
  "Pamela C",
  "Robb V",
  "Rosalinda R",
  "Tracy D",
  "Wade D",
  "William B"
];

var properties = [
  "Add-on (Please list in comments)",
  "Sublet (Please list in comments)",
  "Other (Please list in comments)",
  "10 N Livingston St #1006",
  "10 N Livingston St #1009",
  "10 N Livingston St #1023",
  "10 N Livingston St #406",
  "10 N Livingston St #409",
  "10 N Livingston St #413",
  "10 N Livingston St #417",
  "10 N Livingston St #427",
  "10 N Livingston St #445",
  "10 N Livingston St #448",
  "10 N Livingston St #503",
  "10 N Livingston St #506",
  "10 N Livingston St #517",
  "10 N Livingston St #521",
  "10 N Livingston St #524",
  "10 N Livingston St #527",
  "10 N Livingston St #529",
  "10 N Livingston St #602",
  "10 N Livingston St #609",
  "10 N Livingston St #617",
  "10 N Livingston St #624",
  "10 N Livingston St #626",
  "10 N Livingston St #702",
  "10 N Livingston St #706",
  "10 N Livingston St #721",
  "10 N Livingston St #809",
  "10 N Livingston St #811",
  "10 N Livingston St #819",
  "10 N Livingston St #827",
  "10 N Livingston St #919",
  "100 Morningside Ave",
  "1001 Gilbert Rd #02",
  "1001 Gilbert Rd #04",
  "1001 Gilbert Rd #07",
  "1001 Gilbert Rd #20",
  "1001 Gilbert Rd #24",
  "1005 Gilbert Rd #02",
  "1005 Gilbert Rd #24",
  "1005 Gilbert Rd #28",
  "1009 Gilbert Rd #07",
  "1009 Gilbert Rd #21",
  "1009 Gilbert Rd #23",
  "1009 South View Rd",
  "1018 Colby St # 2",
  "1020 E Johnson St #1",
  "1023 S Park St #3",
  "1023 S Park St #4",
  "1027 Jenifer St #2E",
  "1027 Jenifer St #3E",
  "1036 Williamson St #1",
  "1036 Williamson St #2",
  "1118 Petra Place # 2",
  "1118 Petra Place # 4",
  "1120 Stonewood Crossing #1102",
  "1120 Stonewood Crossing #1201",
  "1120 Stonewood Crossing #2101",
  "1120 Stonewood Crossing #2201",
  "1120 Stonewood Crossing #2205",
  "1120 Stonewood Crossing #3101",
  "1120 Stonewood Crossing #3205",
  "1120 Stonewood Crossing #3206",
  "1128 Morraine View Dr. #201",
  "1128 Morraine View Dr. #208",
  "1128 Morraine View Dr. #304",
  "1129 Mound St #2",
  "1129 Mound Street #1A",
  "1129 Mound Street #1B",
  "1129 Mound Street #1D",
  "1129 Mound Street #1E",
  "1136 Morraine View Dr. #204",
  "1136 Morraine View Dr. #303",
  "1140 Morraine View Dr #208",
  "1140 Morraine View Dr. #302",
  "1140 Morraine View Dr. #305",
  "1140 Morraine View Dr. #306",
  "1140 Morraine View Dr. #307",
  "1144 Morraine View Dr #102",
  "1144 Morraine View Dr #203",
  "1144 Morraine View Dr #301",
  "1148 Morraine View Dr. #203",
  "1148 Morraine View Dr. #205",
  "1148 Morraine View Dr. #207",
  "1211 Mound St #1",
  "1211 Mound St #2",
  "1228 Mound St",
  "1231 Mound St",
  "1232 Bowen Ct",
  "1233 Mound St #2",
  "1234 Dartmouth Rd",
  "1235 Mound St",
  "1236 Mound St #1",
  "126 E Wilson St #B",
  "126 E Wilson St #E",
  "126 E Wilson St #I",
  "126 E Wilson St #N",
  "126 E Wilson St #O",
  "1309 Prairie Rd",
  "1309 Temkin Ave #1",
  "1309 Temkin Ave #2",
  "1309 Temkin Ave #7",
  "131 E Johnson St. #2",
  "1313 Temkin Ave #1",
  "1313 Temkin Ave #2",
  "1313 Temkin Ave #6",
  "1313 Temkin Ave #8",
  "1317 Temkin Ave #11",
  "1317 Temkin Ave #9",
  "1321 Temkin Ave #3",
  "1321 Temkin Ave #8",
  "1323 W Dayton St #505",
  "1323 W Dayton St #800",
  "1325 Temkin Ave #5",
  "1326 Chandler St #1A",
  "1326 Chandler St #1B",
  "1326 Chandler St #1C",
  "1326 Chandler St #1D",
  "1326 Chandler St #1E",
  "1329 Temkin Ave #1",
  "1329 Temkin Ave #5",
  "1329 Temkin Ave #7",
  "1331 S Thompson Dr",
  "1401 E 2nd Ave",
  "1406 Drake St #1",
  "1406 Drake St #3",
  "142 Paoli St #107",
  "142 Paoli St #109",
  "142 Paoli St #110",
  "142 Paoli St #308",
  "142 W Johnson St #2",
  "142 W Johnson St #201",
  "1423 Regent St #3",
  "15 N Hancock St #206",
  "15 N Hancock St #207",
  "15 N Hancock St #209",
  "15 N Hancock St #210",
  "15 N Hancock St #L-1",
  "15 N Hancock St #L-2",
  "151 N Main St #1",
  "1601 Adams St # 4",
  "1601 Adams St # 6",
  "1621 Jefferson St #2",
  "1726 Fremont Ave",
  "18 N Paterson St #514",
  "18 N Paterson St #604",
  "1804 Madison St #2",
  "1816 Madison St",
  "1820 Madison St",
  "1830 Delaware Drive",
  "1838 Spohn Ave Lower",
  "1838 Spohn Ave Upper",
  "1953 Sachtjen St",
  "2 Montana Cir",
  "2012 University Ave",
  "202 S Henry St #1R",
  "2024 Kendall Ave #3",
  "2024 Kendall Ave #4",
  "2027 University Ave",
  "2027 University Ave #1C",
  "203 Wyalusing Dr",
  "205 Wyalusing Dr",
  "210 S Mills St #A Rm B",
  "210 S Mills St #B",
  "2104 University Ave #2",
  "2104 University Ave #5",
  "2109 Winnebago St #2",
  "213 N Brooks St #1",
  "213 N Brooks St #2 Rm A",
  "213 N Brooks St #2 Rm B",
  "213 N Brooks St #2 Rm E",
  "213 N Brooks St #3 Rm A",
  "213 N Brooks St #3 Rm C",
  "213 N Brooks St #3 Rm D",
  "214 N Blair St #1",
  "214 N Blair St #2",
  "215 S Franklin St # 4",
  "215 S Franklin St # 6",
  "215 S Franklin St # 8",
  "216 S Mills St #B",
  "220 State St #4",
  "2212 Regent St #C",
  "222 N Charter St Room 1E",
  "222 State St #301",
  "2221 Sherman Ave #106",
  "2221 Sherman Ave #205",
  "2221 Sherman Ave #206",
  "2221 Sherman Ave #215",
  "2221 Sherman Ave #216",
  "2221 Sherman Ave #315",
  "2221 Sherman Ave #320",
  "2221 Sherman Ave #409",
  "2221 Sherman Ave #411",
  "2221 Sherman Ave #415",
  "23 N Mills St #2",
  "240 12th St # 404",
  "240 12th St #101",
  "2410 Brentwood Pkwy #C",
  "2414 Brentwood Pkwy #A",
  "2417 Brentwood Pkwy #B",
  "242 12th St # 702",
  "242 12th St # 706",
  "242 12th St # 712",
  "2448 S Syene Rd #2",
  "2448 S Syene Rd #4",
  "25 E Gorham St #2",
  "250 Langdon St #1",
  "250 Langdon St #4",
  "2501 Brentwood Pkwy #3",
  "2502 Brentwood Pkwy #C",
  "2515 Ski Ln",
  "2613 Smithfield Dr #2",
  "2613 Smithfield Dr #3",
  "2613 Smithfield Dr #4",
  "2616 Sand Pearl Trl",
  "2720 McDivitt Rd #101",
  "2720 McDivitt Rd #106",
  "2720 McDivitt Rd #204",
  "2720 McDivitt Rd #406",
  "2786 Lyman Lane",
  "2942 Holborn Circle",
  "2961 King James Way #13",
  "2961 King James Way #16",
  "2961 King James Way #6",
  "2964 Turbot Drive",
  "2991 Arapaho Dr.",
  "3009 Dianne Dr",
  "302 S Main St #2",
  "3080 County Highway MM Rm 2",
  "3080 County Highway MM Rm 4",
  "3080 County Highway MM Rm 7",
  "3080 County Highway MM Rm 8",
  "31 Hart Rd #1",
  "3118 Churchill Dr",
  "3120 Churchill Dr",
  "316 N Breese Ter #3",
  "320 S Franklin St",
  "321 E Johnson St",
  "330 Island Dr #5",
  "332 Island Dr #7",
  "3326 Leopold Way #A",
  "3330 Leopold Way #C",
  "334 Island Dr #11",
  "334 Island Dr #14",
  "336 Island Dr #16",
  "336 Island Dr #19",
  "340 N Allen St #20",
  "344 Island Dr #11",
  "346 Island Dr #15",
  "346 Island Dr #18",
  "358 E Lakeside St 5",
  "3802 Hoover Dr #1",
  "3806 Hoover Dr #1",
  "3918 Rieder Rd",
  "402 Chamberlain Ave #6",
  "402 S Mills St #1",
  "404 W Mifflin St #2",
  "411 W Doty St #1",
  "420 W Gorham St #411",
  "420 W Gorham St #504",
  "420 W Gorham St #512",
  "420 W Gorham St #513",
  "426 Moorland Rd",
  "427 W Main St #001",
  "427 W Main St #201",
  "427 W Main St #202",
  "427 W Main St #212",
  "427 W Main St #213",
  "427 W Main St #214",
  "427 W Main St #303",
  "427 W Main St #304",
  "427 W Main St #308",
  "427 W Main St #310",
  "427 W Main St #313",
  "430 W Doty St #2",
  "4305 North Towne Court # 1",
  "4309 North Towne Court # 3",
  "4316 Dwight Dr",
  "4320 North Towne Court # 101",
  "4320 North Towne Court # 108",
  "4320 North Towne Court # 205",
  "4320 North Towne Court # 206",
  "4320 North Towne Court # 212",
  "4320 North Towne Court # 304",
  "4320 North Towne Court # 305",
  "4320 North Towne Court # 310",
  "4320 North Towne Court # 314",
  "4321 North Towne Court #1",
  "4345 Britta Dr # 2",
  "4516 Thurston Ln #2",
  "4520 Thurston Ln #2",
  "4520 Thurston Ln #7",
  "4536 Thurston Lane 7",
  "4817 Kim Ln #1",
  "49 Sunfish Ct #B",
  "501 W Main St #2",
  "5022 Sheboygan Ave #14",
  "5022 Sheboygan Ave #15",
  "5022 Sheboygan Ave #16",
  "5022 Sheboygan Ave #3",
  "5022 Sheboygan Ave #5",
  "5022 Sheboygan Ave #6",
  "5022 Sheboygan Ave #8",
  "503 State St #1",
  "506 Farley Ave #3",
  "506 Shepard Ter #6E",
  "508 Farley Ave #1",
  "508 Farley Ave #A",
  "509 Acker Parkway",
  "510 Shepard Ter #5A",
  "510 Shepard Ter #5B",
  "510 Shepard Ter #5E",
  "514 Shepard Ter #4A",
  "514 Shepard Ter #4B",
  "514 Shepard Ter #4C",
  "514 Shepard Ter #4E",
  "5170 Anton Dr #7",
  "5170 Anton Dr #9",
  "5174 Anton Dr #5",
  "5174 Anton Dr #9",
  "518 Shepard Ter #3B",
  "518 Shepard Ter #3D",
  "5210 Loruth Ter",
  "522 Shepard Ter #2C",
  "522 State St #D",
  "526 Meadow View Rd #2",
  "528 State St #1",
  "530 W Main St #1",
  "530 W Main St #2",
  "530 W Main St #3",
  "5302 Congress Ave #2",
  "5318 Congress Ave #4",
  "533 W Washington Ave #3",
  "536 Melody Lane Apt #1",
  "536 Melody Lane Apt #3",
  "5364 Congress Ave #3",
  "537 W Washington Ave #2",
  "541 W Washington Ave #1",
  "548 W Main St #1",
  "548 W Main St #1 Rm B",
  "548 W Main St #1 Rm C",
  "548 W Main St #1 Rm D",
  "548 W Main St #2",
  "548 W Main St#1 Rm A",
  "551 N Westmount Dr #1",
  "551 N Westmount Dr #3",
  "57 Sunfish Ct #C",
  "58 Sinykin Circle #1",
  "58 Sinykin Circle #3",
  "5817 Raymond Road #2",
  "5817 Raymond Road #3",
  "5817 Raymond Road #4",
  "6 N Charter St #8",
  "601 Meadow View Rd",
  "608 S Main St",
  "610 S Main St",
  "619 N Segoe Rd #110",
  "619 N Segoe Rd #206",
  "619 N Segoe Rd #310",
  "619 N Segoe Rd #312",
  "619 N Segoe Rd #406",
  "619 N Segoe Rd #409",
  "619 N Segoe Rd #606",
  "619 N Segoe Rd #609",
  "619 N Segoe Rd #703",
  "619 N Segoe Rd #709",
  "619 N Segoe Rd #806",
  "619 N Segoe Rd #809",
  "620 S. Burr Oak Ave",
  "6210 Mineral Point Rd #11",
  "6210 Mineral Point Rd #12",
  "6210 Mineral Point Rd #20",
  "6210 Mineral Point Rd #22",
  "6621 Berkshire Rd",
  "6717 Fairhaven Rd #9",
  "6741 Hammersley Rd #1",
  "6741 Hammersley Rd #3",
  "6749 Fairhaven Rd #106",
  "6749 Fairhaven Rd #107",
  "6749 Fairhaven Rd #109",
  "6749 Fairhaven Rd #115",
  "701 Brookstone Crest",
  "702 Cone Flower Street",
  "706 Harrison St",
  "7106 Fortune Dr #26",
  "714 Harrison St #202",
  "7211 Flagship Dr #6",
  "739 E Gorham St #2",
  "745 E Mifflin St #L102",
  "745 E Mifflin St #L108",
  "745 E Mifflin St #L112",
  "745 E Mifflin St #L212",
  "745 E Mifflin St #L214",
  "745 E Mifflin St #L312",
  "745 E Mifflin St #L401",
  "745 E Mifflin St #L414",
  "745 E Mifflin St #L416",
  "747 E Mifflin St #L111",
  "802 Brandie Rd #1",
  "802 Brandie Rd #4",
  "805 Brandie Rd",
  "806 Brandie Rd #3",
  "806 Brandie Rd #4",
  "808 Brandie Rd #8",
  "811 Garfield St #3",
  "8201 Mayo Dr #313",
  "821 E Mifflin St",
  "822 E Washington Ave #1022",
  "822 E Washington Ave #1024",
  "822 E Washington Ave #1028",
  "822 E Washington Ave #1034",
  "822 E Washington Ave #1104",
  "822 E Washington Ave #1111",
  "822 E Washington Ave #1119",
  "822 E Washington Ave #1211",
  "822 E Washington Ave #1411",
  "822 E Washington Ave #402",
  "822 E Washington Ave #412",
  "822 E Washington Ave #415",
  "822 E Washington Ave #421",
  "822 E Washington Ave #425",
  "822 E Washington Ave #430",
  "822 E Washington Ave #432",
  "822 E Washington Ave #500",
  "822 E Washington Ave #520",
  "822 E Washington Ave #532",
  "822 E Washington Ave #600",
  "822 E Washington Ave #624",
  "822 E Washington Ave #634",
  "822 E Washington Ave #701",
  "822 E Washington Ave #707",
  "822 E Washington Ave #807",
  "822 E Washington Ave #827",
  "822 E Washington Ave #901",
  "822 E Washington Ave #907",
  "822 E Washington Ave #928",
  "832 E Gorham St #1",
  "834 E Gorham St #3",
  "903 Hubbell St",
  "939 Jenifer St #4",
  "9421 Elderberry Rd",
  "10 N Livingston St #1006",
  "10 N Livingston St #1009",
  "10 N Livingston St #1023",
  "10 N Livingston St #406",
  "10 N Livingston St #409",
  "10 N Livingston St #413",
  "10 N Livingston St #417",
  "10 N Livingston St #427",
  "10 N Livingston St #445",
  "10 N Livingston St #448",
  "10 N Livingston St #503",
  "10 N Livingston St #506",
  "10 N Livingston St #517",
  "10 N Livingston St #521",
  "10 N Livingston St #524",
  "10 N Livingston St #527",
  "10 N Livingston St #529",
  "10 N Livingston St #602",
  "10 N Livingston St #609",
  "10 N Livingston St #617",
  "10 N Livingston St #624",
  "10 N Livingston St #626",
  "10 N Livingston St #702",
  "10 N Livingston St #706",
  "10 N Livingston St #721",
  "10 N Livingston St #809",
  "10 N Livingston St #811",
  "10 N Livingston St #819",
  "10 N Livingston St #827",
  "10 N Livingston St #919",
  "100 Morningside Ave",
  "1001 Gilbert Rd #02",
  "1001 Gilbert Rd #04",
  "1001 Gilbert Rd #07",
  "1001 Gilbert Rd #20",
  "1001 Gilbert Rd #24",
  "1005 Gilbert Rd #02",
  "1005 Gilbert Rd #24",
  "1005 Gilbert Rd #28",
  "1009 Gilbert Rd #07",
  "1009 Gilbert Rd #21",
  "1009 Gilbert Rd #23",
  "1009 South View Rd",
  "1018 Colby St # 2",
  "1020 E Johnson St #1",
  "1023 S Park St #3",
  "1023 S Park St #4",
  "1027 Jenifer St #2E",
  "1027 Jenifer St #3E",
  "1036 Williamson St #1",
  "1036 Williamson St #2",
  "1118 Petra Place # 2",
  "1118 Petra Place # 4",
  "1120 Stonewood Crossing #1102",
  "1120 Stonewood Crossing #1201",
  "1120 Stonewood Crossing #2101",
  "1120 Stonewood Crossing #2201",
  "1120 Stonewood Crossing #2205",
  "1120 Stonewood Crossing #3101",
  "1120 Stonewood Crossing #3205",
  "1120 Stonewood Crossing #3206",
  "1128 Morraine View Dr. #201",
  "1128 Morraine View Dr. #208",
  "1128 Morraine View Dr. #304",
  "1129 Mound St #2",
  "1129 Mound Street #1A",
  "1129 Mound Street #1B",
  "1129 Mound Street #1D",
  "1129 Mound Street #1E",
  "1136 Morraine View Dr. #204",
  "1136 Morraine View Dr. #303",
  "1140 Morraine View Dr #208",
  "1140 Morraine View Dr. #302",
  "1140 Morraine View Dr. #305",
  "1140 Morraine View Dr. #306",
  "1140 Morraine View Dr. #307",
  "1144 Morraine View Dr #102",
  "1144 Morraine View Dr #203",
  "1144 Morraine View Dr #301",
  "1148 Morraine View Dr. #203",
  "1148 Morraine View Dr. #205",
  "1148 Morraine View Dr. #207",
  "1211 Mound St #1",
  "1211 Mound St #2",
  "1228 Mound St",
  "1231 Mound St",
  "1232 Bowen Ct",
  "1233 Mound St #2",
  "1234 Dartmouth Rd",
  "1235 Mound St",
  "1236 Mound St #1",
  "126 E Wilson St #B",
  "126 E Wilson St #E",
  "126 E Wilson St #I",
  "126 E Wilson St #N",
  "126 E Wilson St #O",
  "1309 Prairie Rd",
  "1309 Temkin Ave #1",
  "1309 Temkin Ave #2",
  "1309 Temkin Ave #7",
  "131 E Johnson St. #2",
  "1313 Temkin Ave #1",
  "1313 Temkin Ave #2",
  "1313 Temkin Ave #6",
  "1313 Temkin Ave #8",
  "1317 Temkin Ave #11",
  "1317 Temkin Ave #9",
  "1321 Temkin Ave #3",
  "1321 Temkin Ave #8",
  "1323 W Dayton St #505",
  "1323 W Dayton St #800",
  "1325 Temkin Ave #5",
  "1326 Chandler St #1A",
  "1326 Chandler St #1B",
  "1326 Chandler St #1C",
  "1326 Chandler St #1D",
  "1326 Chandler St #1E",
  "1329 Temkin Ave #1",
  "1329 Temkin Ave #5",
  "1329 Temkin Ave #7",
  "1331 S Thompson Dr",
  "1401 E 2nd Ave",
  "1406 Drake St #1",
  "1406 Drake St #3",
  "142 Paoli St #107",
  "142 Paoli St #109",
  "142 Paoli St #110",
  "142 Paoli St #308",
  "142 W Johnson St #2",
  "142 W Johnson St #201",
  "1423 Regent St #3",
  "15 N Hancock St #206",
  "15 N Hancock St #207",
  "15 N Hancock St #209",
  "15 N Hancock St #210",
  "15 N Hancock St #L-1",
  "15 N Hancock St #L-2",
  "151 N Main St #1",
  "1601 Adams St # 4",
  "1601 Adams St # 6",
  "1621 Jefferson St #2",
  "1726 Fremont Ave",
  "18 N Paterson St #514",
  "18 N Paterson St #604",
  "1804 Madison St #2",
  "1816 Madison St",
  "1820 Madison St",
  "1830 Delaware Drive",
  "1838 Spohn Ave Lower",
  "1838 Spohn Ave Upper",
  "1953 Sachtjen St",
  "2 Montana Cir",
  "2012 University Ave",
  "202 S Henry St #1R",
  "2024 Kendall Ave #3",
  "2024 Kendall Ave #4",
  "2027 University Ave",
  "2027 University Ave #1C",
  "203 Wyalusing Dr",
  "205 Wyalusing Dr",
  "210 S Mills St #A Rm B",
  "210 S Mills St #B",
  "2104 University Ave #2",
  "2104 University Ave #5",
  "2109 Winnebago St #2",
  "213 N Brooks St #1",
  "213 N Brooks St #2 Rm A",
  "213 N Brooks St #2 Rm B",
  "213 N Brooks St #2 Rm E",
  "213 N Brooks St #3 Rm A",
  "213 N Brooks St #3 Rm C",
  "213 N Brooks St #3 Rm D",
  "214 N Blair St #1",
  "214 N Blair St #2",
  "215 S Franklin St # 4",
  "215 S Franklin St # 6",
  "215 S Franklin St # 8",
  "216 S Mills St #B",
  "220 State St #4",
  "2212 Regent St #C",
  "222 N Charter St Room 1E",
  "222 State St #301",
  "2221 Sherman Ave #106",
  "2221 Sherman Ave #205",
  "2221 Sherman Ave #206",
  "2221 Sherman Ave #215",
  "2221 Sherman Ave #216",
  "2221 Sherman Ave #315",
  "2221 Sherman Ave #320",
  "2221 Sherman Ave #409",
  "2221 Sherman Ave #411",
  "2221 Sherman Ave #415",
  "23 N Mills St #2",
  "240 12th St # 404",
  "240 12th St #101",
  "2410 Brentwood Pkwy #C",
  "2414 Brentwood Pkwy #A",
  "2417 Brentwood Pkwy #B",
  "242 12th St # 702",
  "242 12th St # 706",
  "242 12th St # 712",
  "2448 S Syene Rd #2",
  "2448 S Syene Rd #4",
  "25 E Gorham St #2",
  "250 Langdon St #1",
  "250 Langdon St #4",
  "2501 Brentwood Pkwy #3",
  "2502 Brentwood Pkwy #C",
  "2515 Ski Ln",
  "2613 Smithfield Dr #2",
  "2613 Smithfield Dr #3",
  "2613 Smithfield Dr #4",
  "2616 Sand Pearl Trl",
  "2720 McDivitt Rd #101",
  "2720 McDivitt Rd #106",
  "2720 McDivitt Rd #204",
  "2720 McDivitt Rd #406",
  "2786 Lyman Lane",
  "2942 Holborn Circle",
  "2961 King James Way #13",
  "2961 King James Way #16",
  "2961 King James Way #6",
  "2964 Turbot Drive",
  "2991 Arapaho Dr.",
  "3009 Dianne Dr",
  "302 S Main St #2",
  "3080 County Highway MM Rm 2",
  "3080 County Highway MM Rm 4",
  "3080 County Highway MM Rm 7",
  "3080 County Highway MM Rm 8",
  "31 Hart Rd #1",
  "3118 Churchill Dr",
  "3120 Churchill Dr",
  "316 N Breese Ter #3",
  "320 S Franklin St",
  "321 E Johnson St",
  "330 Island Dr #5",
  "332 Island Dr #7",
  "3326 Leopold Way #A",
  "3330 Leopold Way #C",
  "334 Island Dr #11",
  "334 Island Dr #14",
  "336 Island Dr #16",
  "336 Island Dr #19",
  "340 N Allen St #20",
  "344 Island Dr #11",
  "346 Island Dr #15",
  "346 Island Dr #18",
  "358 E Lakeside St 5",
  "3802 Hoover Dr #1",
  "3806 Hoover Dr #1",
  "3918 Rieder Rd",
  "402 Chamberlain Ave #6",
  "402 S Mills St #1",
  "404 W Mifflin St #2",
  "411 W Doty St #1",
  "420 W Gorham St #411",
  "420 W Gorham St #504",
  "420 W Gorham St #512",
  "420 W Gorham St #513",
  "426 Moorland Rd",
  "427 W Main St #001",
  "427 W Main St #201",
  "427 W Main St #202",
  "427 W Main St #212",
  "427 W Main St #213",
  "427 W Main St #214",
  "427 W Main St #303",
  "427 W Main St #304",
  "427 W Main St #308",
  "427 W Main St #310",
  "427 W Main St #313",
  "430 W Doty St #2",
  "4305 North Towne Court # 1",
  "4309 North Towne Court # 3",
  "4316 Dwight Dr",
  "4320 North Towne Court # 101",
  "4320 North Towne Court # 108",
  "4320 North Towne Court # 205",
  "4320 North Towne Court # 206",
  "4320 North Towne Court # 212",
  "4320 North Towne Court # 304",
  "4320 North Towne Court # 305",
  "4320 North Towne Court # 310",
  "4320 North Towne Court # 314",
  "4321 North Towne Court #1",
  "4345 Britta Dr # 2",
  "4516 Thurston Ln #2",
  "4520 Thurston Ln #2",
  "4520 Thurston Ln #7",
  "4536 Thurston Lane 7",
  "4817 Kim Ln #1",
  "49 Sunfish Ct #B",
  "501 W Main St #2",
  "5022 Sheboygan Ave #14",
  "5022 Sheboygan Ave #15",
  "5022 Sheboygan Ave #16",
  "5022 Sheboygan Ave #3",
  "5022 Sheboygan Ave #5",
  "5022 Sheboygan Ave #6",
  "5022 Sheboygan Ave #8",
  "503 State St #1",
  "506 Farley Ave #3",
  "506 Shepard Ter #6E",
  "508 Farley Ave #1",
  "508 Farley Ave #A",
  "509 Acker Parkway",
  "510 Shepard Ter #5A",
  "510 Shepard Ter #5B",
  "510 Shepard Ter #5E",
  "514 Shepard Ter #4A",
  "514 Shepard Ter #4B",
  "514 Shepard Ter #4C",
  "514 Shepard Ter #4E",
  "5170 Anton Dr #7",
  "5170 Anton Dr #9",
  "5174 Anton Dr #5",
  "5174 Anton Dr #9",
  "518 Shepard Ter #3B",
  "518 Shepard Ter #3D",
  "5210 Loruth Ter",
  "522 Shepard Ter #2C",
  "522 State St #D",
  "526 Meadow View Rd #2",
  "528 State St #1",
  "530 W Main St #1",
  "530 W Main St #2",
  "530 W Main St #3",
  "5302 Congress Ave #2",
  "5318 Congress Ave #4",
  "533 W Washington Ave #3",
  "536 Melody Lane Apt #1",
  "536 Melody Lane Apt #3",
  "5364 Congress Ave #3",
  "537 W Washington Ave #2",
  "541 W Washington Ave #1",
  "548 W Main St #1",
  "548 W Main St #1 Rm B",
  "548 W Main St #1 Rm C",
  "548 W Main St #1 Rm D",
  "548 W Main St #2",
  "548 W Main St#1 Rm A",
  "551 N Westmount Dr #1",
  "551 N Westmount Dr #3",
  "57 Sunfish Ct #C",
  "58 Sinykin Circle #1",
  "58 Sinykin Circle #3",
  "5817 Raymond Road #2",
  "5817 Raymond Road #3",
  "5817 Raymond Road #4",
  "6 N Charter St #8",
  "601 Meadow View Rd",
  "608 S Main St",
  "610 S Main St",
  "619 N Segoe Rd #110",
  "619 N Segoe Rd #206",
  "619 N Segoe Rd #310",
  "619 N Segoe Rd #312",
  "619 N Segoe Rd #406",
  "619 N Segoe Rd #409",
  "619 N Segoe Rd #606",
  "619 N Segoe Rd #609",
  "619 N Segoe Rd #703",
  "619 N Segoe Rd #709",
  "619 N Segoe Rd #806",
  "619 N Segoe Rd #809",
  "620 S. Burr Oak Ave",
  "6210 Mineral Point Rd #11",
  "6210 Mineral Point Rd #12",
  "6210 Mineral Point Rd #20",
  "6210 Mineral Point Rd #22",
  "6621 Berkshire Rd",
  "6717 Fairhaven Rd #9",
  "6741 Hammersley Rd #1",
  "6741 Hammersley Rd #3",
  "6749 Fairhaven Rd #106",
  "6749 Fairhaven Rd #107",
  "6749 Fairhaven Rd #109",
  "6749 Fairhaven Rd #115",
  "701 Brookstone Crest",
  "702 Cone Flower Street",
  "706 Harrison St",
  "7106 Fortune Dr #26",
  "714 Harrison St #202",
  "7211 Flagship Dr #6",
  "739 E Gorham St #2",
  "745 E Mifflin St #L102",
  "745 E Mifflin St #L108",
  "745 E Mifflin St #L112",
  "745 E Mifflin St #L212",
  "745 E Mifflin St #L214",
  "745 E Mifflin St #L312",
  "745 E Mifflin St #L401",
  "745 E Mifflin St #L414",
  "745 E Mifflin St #L416",
  "747 E Mifflin St #L111",
  "802 Brandie Rd #1",
  "802 Brandie Rd #4",
  "805 Brandie Rd",
  "806 Brandie Rd #3",
  "806 Brandie Rd #4",
  "808 Brandie Rd #8",
  "811 Garfield St #3",
  "8201 Mayo Dr #313",
  "821 E Mifflin St",
  "822 E Washington Ave #1022",
  "822 E Washington Ave #1024",
  "822 E Washington Ave #1028",
  "822 E Washington Ave #1034",
  "822 E Washington Ave #1104",
  "822 E Washington Ave #1111",
  "822 E Washington Ave #1119",
  "822 E Washington Ave #1211",
  "822 E Washington Ave #1411",
  "822 E Washington Ave #402",
  "822 E Washington Ave #412",
  "822 E Washington Ave #415",
  "822 E Washington Ave #421",
  "822 E Washington Ave #425",
  "822 E Washington Ave #430",
  "822 E Washington Ave #432",
  "822 E Washington Ave #500",
  "822 E Washington Ave #520",
  "822 E Washington Ave #532",
  "822 E Washington Ave #600",
  "822 E Washington Ave #624",
  "822 E Washington Ave #634",
  "822 E Washington Ave #701",
  "822 E Washington Ave #707",
  "822 E Washington Ave #807",
  "822 E Washington Ave #827",
  "822 E Washington Ave #901",
  "822 E Washington Ave #907",
  "822 E Washington Ave #928",
  "832 E Gorham St #1",
  "834 E Gorham St #3",
  "903 Hubbell St",
  "939 Jenifer St #4",
];


var boolOptions = [
  "Please Select",
  "Yes",
  "No",
];

var occupantRelations = [
  "Child",
  "Dependent",
  "Other"
];

let myKey = 0;

function DropDownSelect(property) {
  myKey++;
  return (
    <option key={myKey} value={property}>{property}</option>
  );
}

let ApplicationForm = props => {
  const { handleSubmit } = props;
  var coApplicantClass = "row d-none";
  if (props.showCoApplicants){
    coApplicantClass = "row ";
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="App-intro">
        Please fill out the information below to submit your application
      </p>
      <div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="consultantSelect">Leasing Agent you worked with:</label><br/>
            <Field
              name="consultantSelect"
              component="select"
              className="form-control"
            >
              {consultants.map(DropDownSelect)}
            </Field>

          </div>
          <div className="col-md-4">
            <label htmlFor="propertySelect">Property:</label><br/>
            <Field
              name="propertySelect"
              component="select"
              className="form-control"
            >
              {properties.map(DropDownSelect)}
            </Field>
          </div>
          <div className="col-md-4">
            <label htmlFor="moveIn">Expected Move In:</label><br/>
            <Field name="moveIn" component="input" type="date" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <label htmlFor="rent">Rent $:</label><br/>
            <Field name="rent" component="input" type="number" />
          </div>
          <div className="col-md-4">
            <label htmlFor="rent">Deposit $:</label><br/>
            <Field name="deposit" component="input" type="number" />
          </div>
        </div>

        <h2 className="section-header">Application Procedure</h2>
        <div className="row">
          <div className="col-md-12">

<p>Please fill out the following application completely and accurately. Falsification of any information is grounds for denial. All approved applicants are required to provide a valid driver's license or state identification card. If an application is incomplete, our staff will call the applicant one time to obtain the information needed in order to complete the application. If this call does not provide the necessary information, rejection may be based on an incomplete application. Each application is valid for up to 30 days. After that time, a new application must be filled out. Please note: current tenants of MPM are required to fill out a new application when moving to a different unit.</p>

<p>Applicants must demonstrate an ability to pay the monthly rent. Information about your current employer, including names and telephone numbers of references, must be provided if applicable. Please list all sources of income. Employment references may be checked to verify income. If an applicant receives an income subsidy, verification must be provided when turning in the completed application. If an applicant has a payee or other contact person at a specific agency, that payee’s name and telephone number must be provided. If an applicant does not demonstrate the ability to pay the monthly rent, a co-signer may be required to guarantee the financial obligations of the lease. A credit check may be conducted on any submitted application. Poor credit does not always result in application rejection; however, it may be a factor used in processing the application, and may be grounds for denial.</p>

<p>A rental history check may be conducted on your application. Applicants are required to have at least two years of satisfactory housing history including rental history and/or home ownership. Please complete your current and prior landlord information. If you own or have owned a home, please make note of this. Satisfactory housing history does not include time residing in student housing (dorms) or residing with parents or relatives. Applicants with less than two years of housing history may be asked to obtain a co-signer to guarantee the financial obligations of the lease. If an applicant owes money to a previous landlord, this balance must be paid in full before the application will be processed.</p>

<p>ACME Property Management, Inc. manages properties owned by different property owners. Each owner has different requirements for tenancy. ACME Property Management, Inc. rents to applicants in the order that their applications are approved. Application processing may take up to 72 hours. We will contact you after your application has been processed. We provide copies of the lease agreement and lease rules upon request. No Earnest Money Deposit is required.</p>
          </div>
        </div>
        <h2 className="section-header">Applicant Info</h2>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="firstName">First Name:</label><br/>
            <Field name="firstname" component="input" type="text" />

          </div>
          <div className="col-md-4">
            <label htmlFor="lastName">Last Name:</label><br/>
            <Field name="lastName" component="input" type="text" />
          </div>
          <div className="col-md-4">
            <label htmlFor="birthDate">Date of Birth:</label><br/>
            <Field name="birthDate" component="input" type="date" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="social">Social Security #:</label><br/>
            <Field name="social" component="input" type="text" />

          </div>
          <div className="col-md-4">
            <label htmlFor="driverLicense">Drivers License:</label><br/>
            <Field name="driverLicense" component="input" type="text" />
          </div>
          <div className="col-md-4">
            <label htmlFor="cellNumber">Cell Number:</label><br/>
            <Field name="cellNumber" component="input" type="phone" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="email">Email:</label><br/>
            <Field name="email" component="input" type="text" />
          </div>
        </div>
        <h2 className="section-header">Additional Occupant under 18 years of age</h2>
        <div className="row">
          Do you have co-applicants that will be living with you?
        </div>
        <div className="row">
          <div className="col-md-3">
            <label><Field name="coapplicant" component="input" type="radio" value="yes"/> Yes</label>
          </div>
          <div className="col-md-3">
              <label><Field name="coapplicant" component="input" type="radio" value="no"/> No</label>
          </div>
        </div>
        <div className={coApplicantClass} >
          <div className="col-md-3">
            <label htmlFor="co-occupant-first-name">First Name:</label><br/>
            <Field name="co-occupant-first-name" component="input" type="text" />
          </div>
          <div className="col-md-3">
            <label htmlFor="co-occupant-last-name">Last Name:</label><br/>
            <Field name="co-occupant-last-name" component="input" type="text" />
          </div>
          <div className="col-md-3">
            <label htmlFor="co-occupant-dob">Date of Birth:</label><br/>
            <Field name="co-occupant-dob" component="input" type="date" />
          </div>
          <div className="col-md-3">
            <label htmlFor="co-occupant-relation">Relation to Applicant:</label><br/>
            <Field
              name="co-occupant-relation"
              component="select"
              className="form-control"
            >
              {occupantRelations.map(DropDownSelect)}
            </Field>
          </div>
        </div>
        <h2 className="section-header">Housing History</h2>
        <h3 className="subsection-header">Current Residence</h3>
        <PreviousResidenceForm />
        <h3 className="subsection-header">Previous Residence 1</h3>
        <PreviousResidenceForm />
        <h3 className="subsection-header">Previous Residence 2</h3>
        <PreviousResidenceForm />
        <h2 className="section-header">Lease History Details</h2>
        <p>Any false statements or omissions are grounds for immediate application rejection, or future termination of any lease signed pursuant to this application.</p>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="evictionSelect">Has an eviction action ever been filed against you or someone you were living with at the time? </label><br/>
            <Field
              name="evictionSelect"
              component="select"
              className="form-control"
            >
              {boolOptions.map(DropDownSelect)}
            </Field>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <label htmlFor="convictionSelect">Have you been found guilty of an offense involving violence to persons or property</label><br/>
          <Field
            name="convictionSelect"
            component="select"
            className="form-control"
          >
            {boolOptions.map(DropDownSelect)}
          </Field>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <label htmlFor="oweLandlordSelect">Do you owe money to your current landlord or any former landlord</label><br/>
          <Field
            name="oweLandlordSelect"
            component="select"
            className="form-control"
          >
            {boolOptions.map(DropDownSelect)}
          </Field>
          </div>
        </div>
        <h2 className="section-header">Application Comments (optional - 255 Character Max):</h2>
        <div className="row">
          <div className="col-md-12">
          <Field name="additionalComment" component="textarea" />
          </div>
        </div>


        <div className="row">
          <div className="col-md-12">
            <Field
              name="certify"
              component="input"
              type="checkbox"
            />&nbsp;
            <label htmlFor="oweLandlordSelect">By checking this box I certify that I have read the above statement and agree to its terms.</label>
          </div>
        </div>
      </div>
    </form>
  )
}

ApplicationForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ApplicationForm)

export default ApplicationForm
