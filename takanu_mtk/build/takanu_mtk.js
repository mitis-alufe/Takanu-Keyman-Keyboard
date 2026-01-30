if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_takanu_mtk());
}
function Keyboard_takanu_mtk()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_takanu_mtk";
  this.KN="Takanu (Lentan, UCSUR)";
  this.KMINVER="10.0";
  this.KV={F:' 1em "SupaPiNenaMuteLaFairfaxLili"',K102:0};
  this.KV.KLS={
    "default": ["`","1","2","3","4","5","6","7","8","9","0","-","=","","","","q","w","e","r","t","y","u","i","o","p","[","]","\\","","","","a","s","d","f","g","h","j","k","l","｢","｣","","","","","","","z","x","c","v","b","n","m","､",":","/","","","","","",""],
    "shift": [")","ʭ","@","#","$","%","^","&","*","(",")","_","+","","","","Q","W","E","R","T","Y","U","I","O","P","{","}","|","","","","A","S","D","F","G","H","J","K","L","『","』","","","","","","","Z","X","C","V","B","N","M",",",".","≈","","","","","",""],
    "alt": ["`","1","2","3","4","5","6","7","8","9","0","-","=","","","","q","w","e","r","t","y","u","i","o","p","‹","›","\\","","","","a","s","d","f","g","h","j","k","l",";","'","","","","","","","z","x","c","v","b","n","m",",",".","/","","","","","",""],
    "shift-alt": ["~","!","@","#","$","%","^","&","*","(",")","_","+","","","","Q","W","E","R","T","Y","U","I","O","P","{","}","|","","","","A","S","D","F","G","H","J","K","L",":","\"","","","","","","","Z","X","C","V","B","N","M","<",">","?","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.RALT | modCodes.SHIFT /* 0x0018 */;
  this.KS=1;
  this.KVKD="T_3001 T_3002";
  this.KVKL={
  "tablet": {
    "font": "SupaPiNenaMuteLaFairfaxLili",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_F1990",
                "text": "‹",
                "sk": [
                  {
                    "text": "(",
                    "id": "U_0028"
                  },
                  {
                    "text": "[",
                    "id": "U_005B"
                  },
                  {
                    "text": "{",
                    "id": "U_007B"
                  },
                  {
                    "text": "<",
                    "id": "U_003C"
                  },
                  {
                    "text": "「",
                    "id": "U_300C"
                  },
                  {
                    "text": "『",
                    "id": "U_300E"
                  },
                  {
                    "text": "◖",
                    "id": "U_25D6"
                  }
                ]
              },
              {
                "id": "U_0077",
                "text": "w",
                "sk": [
                  {
                    "text": "v",
                    "id": "U_0076"
                  },
                  {
                    "text": "f",
                    "id": "U_0066"
                  }
                ]
              },
              {
                "id": "U_0065",
                "text": "e",
                "sk": [
                  {
                    "text": "?",
                    "id": "U_003F"
                  }
                ]
              },
              {
                "id": "U_0074",
                "text": "t",
                "sk": [
                  {
                    "text": "d",
                    "id": "U_0064"
                  }
                ]
              },
              {
                "id": "U_0068",
                "text": "h"
              },
              {
                "id": "U_0075",
                "text": "u",
                "sk": [
                  {
                    "text": "'",
                    "id": "U_0027"
                  },
                  {
                    "text": "‘",
                    "id": "U_2018"
                  },
                  {
                    "text": "’",
                    "id": "U_2019"
                  },
                  {
                    "text": "‚",
                    "id": "U_201A"
                  },
                  {
                    "text": "「",
                    "id": "U_300C"
                  },
                  {
                    "text": "」",
                    "id": "U_300D"
                  }
                ]
              },
              {
                "id": "U_0069",
                "text": "i",
                "sk": [
                  {
                    "text": "\"",
                    "id": "U_0022"
                  },
                  {
                    "text": "“",
                    "id": "U_201C"
                  },
                  {
                    "text": "”",
                    "id": "U_201D"
                  },
                  {
                    "text": "„",
                    "id": "U_201E"
                  },
                  {
                    "text": "『",
                    "id": "U_300E"
                  },
                  {
                    "text": "』",
                    "id": "U_300F"
                  }
                ]
              },
              {
                "id": "U_006F",
                "text": "o",
                "sk": [
                  {
                    "text": ".",
                    "id": "U_002E"
                  },
                  {
                    "text": ",",
                    "id": "U_002C"
                  },
                  {
                    "text": ":",
                    "id": "U_003A"
                  },
                  {
                    "text": ";",
                    "id": "U_003B"
                  },
                  {
                    "text": "。",
                    "id": "T_3002"
                  },
                  {
                    "text": "、",
                    "id": "T_3001"
                  }
                ]
              },
              {
                "id": "U_0070",
                "text": "p",
                "sk": [
                  {
                    "text": "b",
                    "id": "U_0062"
                  }
                ]
              },
              {
                "id": "U_F1991",
                "text": "›",
                "sk": [
                  {
                    "text": ")",
                    "id": "U_0029"
                  },
                  {
                    "text": "]",
                    "id": "U_005D"
                  },
                  {
                    "text": "}",
                    "id": "U_007D"
                  },
                  {
                    "text": ">",
                    "id": "U_003E"
                  },
                  {
                    "text": "」",
                    "id": "U_300D"
                  },
                  {
                    "text": "』",
                    "id": "U_300F"
                  },
                  {
                    "text": "◗",
                    "id": "U_25D7"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "U_0061",
                "text": "a",
                "sk": [
                  {
                    "text": "!",
                    "id": "U_0021"
                  },
                  {
                    "text": "@",
                    "id": "U_0040"
                  }
                ]
              },
              {
                "id": "U_0073",
                "text": "s",
                "sk": [
                  {
                    "text": "x",
                    "id": "U_0078"
                  },
                  {
                    "text": "z",
                    "id": "U_007A"
                  }
                ]
              },
              {
                "id": "U_0063",
                "text": "c"
              },
              {
                "id": "U_006E",
                "text": "n",
                "sk": [
                  {
                    "text": "#",
                    "id": "U_0023"
                  }
                ]
              },
              {
                "id": "U_006D",
                "text": "m",
                "sk": [
                  {
                    "text": "-",
                    "id": "U_002D"
                  },
                  {
                    "text": "+",
                    "id": "U_002B"
                  },
                  {
                    "text": "$",
                    "id": "U_0024"
                  }
                ]
              },
              {
                "id": "U_006A",
                "text": "j",
                "sk": [
                  {
                    "text": "y",
                    "id": "U_0079"
                  }
                ]
              },
              {
                "id": "U_006B",
                "text": "k",
                "sk": [
                  {
                    "text": "g",
                    "id": "U_0067"
                  },
                  {
                    "text": "q",
                    "id": "U_0071"
                  }
                ]
              },
              {
                "id": "U_006C",
                "text": "l",
                "sk": [
                  {
                    "text": "r",
                    "id": "U_0072"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "sp": "1"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "595",
                "sk": [
                  {
                    "text": "󰀠",
                    "id": "U_0020"
                  },
                  {
                    "text": "󰂠",
                    "id": "U_00A0"
                  },
                  {
                    "text": "󳀀",
                    "id": "U_3000"
                  }
                ]
              },
              {
                "id": "U_003A",
                "text": ":",
                "sk": [
                  {
                    "text": "､",
                    "id": "U_FF64"
                  },
                  {
                    "text": "≈",
                    "id": "U_2248"
                  },
                  {
                    "text": "ʭ",
                    "id": "U_02AD"
                  },
                  {
                    "text": "–",
                    "id": "U_2013"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_003C",
                "text": "<",
                "sk": [
                  {
                    "text": "(",
                    "id": "U_0028"
                  },
                  {
                    "text": "[",
                    "id": "U_005B"
                  },
                  {
                    "text": "{",
                    "id": "U_007B"
                  },
                  {
                    "text": "‹",
                    "id": "U_2039"
                  },
                  {
                    "text": "「",
                    "id": "U_300C"
                  },
                  {
                    "text": "『",
                    "id": "U_300E"
                  }
                ]
              },
              {
                "id": "U_0057",
                "text": "W",
                "sk": [
                  {
                    "text": "V",
                    "id": "U_0056"
                  },
                  {
                    "text": "F",
                    "id": "U_0046"
                  }
                ]
              },
              {
                "id": "U_0045",
                "text": "E",
                "sk": [
                  {
                    "text": "?",
                    "id": "U_003F"
                  }
                ]
              },
              {
                "id": "U_0054",
                "text": "T",
                "sk": [
                  {
                    "text": "D",
                    "id": "U_0044"
                  }
                ]
              },
              {
                "id": "U_0048",
                "text": "H"
              },
              {
                "id": "U_0055",
                "text": "U",
                "sk": [
                  {
                    "text": "'",
                    "id": "U_0027"
                  },
                  {
                    "text": "‘",
                    "id": "U_2018"
                  },
                  {
                    "text": "’",
                    "id": "U_2019"
                  },
                  {
                    "text": "‚",
                    "id": "U_201A"
                  },
                  {
                    "text": "「",
                    "id": "U_300C"
                  },
                  {
                    "text": "」",
                    "id": "U_300D"
                  }
                ]
              },
              {
                "id": "U_0049",
                "text": "I",
                "sk": [
                  {
                    "text": "\"",
                    "id": "U_0022"
                  },
                  {
                    "text": "“",
                    "id": "U_201C"
                  },
                  {
                    "text": "”",
                    "id": "U_201D"
                  },
                  {
                    "text": "„",
                    "id": "U_201E"
                  },
                  {
                    "text": "『",
                    "id": "U_300E"
                  },
                  {
                    "text": "』",
                    "id": "U_300F"
                  }
                ]
              },
              {
                "id": "U_004F",
                "text": "O",
                "sk": [
                  {
                    "text": ".",
                    "id": "U_002E"
                  },
                  {
                    "text": ",",
                    "id": "U_002C"
                  },
                  {
                    "text": ":",
                    "id": "U_003A"
                  },
                  {
                    "text": ";",
                    "id": "U_003B"
                  },
                  {
                    "text": "。",
                    "id": "T_3002"
                  },
                  {
                    "text": "、",
                    "id": "T_3001"
                  }
                ]
              },
              {
                "id": "U_0050",
                "text": "P",
                "sk": [
                  {
                    "text": "B",
                    "id": "U_0042"
                  },
                  {
                    "text": "H",
                    "id": "U_0048"
                  }
                ]
              },
              {
                "id": "U_003E",
                "text": ">",
                "sk": [
                  {
                    "text": ")",
                    "id": "U_0029"
                  },
                  {
                    "text": "]",
                    "id": "U_005D"
                  },
                  {
                    "text": "}",
                    "id": "U_007D"
                  },
                  {
                    "text": "›",
                    "id": "U_203A"
                  },
                  {
                    "text": "」",
                    "id": "U_300D"
                  },
                  {
                    "text": "』",
                    "id": "U_300F"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shifted*",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "U_0041",
                "text": "A",
                "sk": [
                  {
                    "text": "!",
                    "id": "U_0021"
                  },
                  {
                    "text": "@",
                    "id": "U_0040"
                  }
                ]
              },
              {
                "id": "U_0053",
                "text": "S",
                "sk": [
                  {
                    "text": "C",
                    "id": "U_0043"
                  },
                  {
                    "text": "X",
                    "id": "U_0058"
                  },
                  {
                    "text": "Z",
                    "id": "U_005A"
                  }
                ]
              },
              {
                "id": "U_0043",
                "text": "C"
              },
              {
                "id": "U_004E",
                "text": "N",
                "sk": [
                  {
                    "text": "#",
                    "id": "U_0023"
                  }
                ]
              },
              {
                "id": "U_004D",
                "text": "M",
                "sk": [
                  {
                    "text": "-",
                    "id": "U_002D"
                  },
                  {
                    "text": "+",
                    "id": "U_002B"
                  },
                  {
                    "text": "$",
                    "id": "U_0024"
                  }
                ]
              },
              {
                "id": "U_004A",
                "text": "J",
                "sk": [
                  {
                    "text": "Y",
                    "id": "U_0059"
                  }
                ]
              },
              {
                "id": "U_004B",
                "text": "K",
                "sk": [
                  {
                    "text": "G",
                    "id": "U_0047"
                  },
                  {
                    "text": "Q",
                    "id": "U_0051"
                  }
                ]
              },
              {
                "id": "U_004C",
                "text": "L",
                "sk": [
                  {
                    "text": "R",
                    "id": "U_0052"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "sp": "1"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "595",
                "sk": [
                  {
                    "text": "󰀠",
                    "id": "U_0020"
                  },
                  {
                    "text": "󰂠",
                    "id": "U_00A0"
                  },
                  {
                    "text": "󳀀",
                    "id": "U_3000"
                  }
                ]
              },
              {
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "text": ",",
                    "id": "U_002C"
                  },
                  {
                    "text": "?",
                    "id": "U_003F"
                  },
                  {
                    "text": "!",
                    "id": "U_0021"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0031",
                "text": "1",
                "sk": [
                  {
                    "text": "`",
                    "id": "U_0060"
                  },
                  {
                    "text": "~",
                    "id": "U_007E"
                  },
                  {
                    "text": "!",
                    "id": "U_0021"
                  }
                ]
              },
              {
                "id": "U_0032",
                "text": "2",
                "sk": [
                  {
                    "text": "@",
                    "id": "U_0040"
                  }
                ]
              },
              {
                "id": "U_0033",
                "text": "3",
                "sk": [
                  {
                    "text": "#",
                    "id": "U_0023"
                  },
                  {
                    "text": "£",
                    "id": "U_00A3"
                  }
                ]
              },
              {
                "id": "U_0034",
                "text": "4",
                "sk": [
                  {
                    "text": "$",
                    "id": "U_0024"
                  }
                ]
              },
              {
                "id": "U_0035",
                "text": "5",
                "sk": [
                  {
                    "text": "%",
                    "id": "U_0025"
                  }
                ]
              },
              {
                "id": "U_0036",
                "text": "6",
                "sk": [
                  {
                    "text": "^",
                    "id": "U_005E"
                  }
                ]
              },
              {
                "id": "U_0037",
                "text": "7",
                "sk": [
                  {
                    "text": "&",
                    "id": "U_0026"
                  }
                ]
              },
              {
                "id": "U_0038",
                "text": "8",
                "sk": [
                  {
                    "text": "*",
                    "id": "U_002A"
                  },
                  {
                    "text": "•",
                    "id": "U_2022"
                  },
                  {
                    "text": "·",
                    "id": "U_00B7"
                  }
                ]
              },
              {
                "id": "U_0039",
                "text": "9",
                "sk": [
                  {
                    "text": "(",
                    "id": "U_0028"
                  },
                  {
                    "text": ")",
                    "id": "U_0029"
                  },
                  {
                    "text": "_",
                    "id": "U_005F"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "U_0030",
                "text": "0"
              },
              {
                "id": "U_002B",
                "text": "+"
              },
              {
                "id": "U_002D",
                "text": "-"
              },
              {
                "id": "U_002A",
                "text": "*"
              },
              {
                "id": "U_002F",
                "text": "/",
                "sk": [
                  {
                    "text": "\\",
                    "id": "U_005C"
                  },
                  {
                    "text": "|",
                    "id": "U_007C"
                  },
                  {
                    "text": "¥",
                    "id": "U_00A5"
                  }
                ]
              },
              {
                "id": "U_003D",
                "text": "=",
                "sk": [
                  {
                    "text": ";",
                    "id": "U_003B"
                  },
                  {
                    "text": ":",
                    "id": "U_003A"
                  }
                ]
              },
              {
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "text": "'",
                    "id": "U_0027"
                  },
                  {
                    "text": "\"",
                    "id": "U_0022"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "sp": "1"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "480",
                "sk": [
                  {
                    "text": "󰀠",
                    "id": "U_0020"
                  },
                  {
                    "text": "󰂠",
                    "id": "U_00A0"
                  },
                  {
                    "text": "󳀀",
                    "id": "U_3000"
                  }
                ]
              },
              {
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "text": "<",
                    "id": "U_003C"
                  },
                  {
                    "text": ">",
                    "id": "U_003E"
                  },
                  {
                    "text": "?",
                    "id": "U_003F"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ],
    "displayUnderlying": false
  }
};
  this.s_ideographic_space_12="　";
  this.s_ideographic_comma_13="、︁";
  this.s_ideographic_full_stop_14="。︁";
  this.s_tk_15=['','','',''];
  this.KVER="18.0.245.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x00)) {
      if(k.KFCM(8,t,['k','o','n','k','u','l','e','n'])){
        r=m=1;   // Line 351
        k.KDC(8,t);
        k.KO(-1,t,"􀅲");
      }
      else if(k.KFCM(8,t,['k','u','w','e','k','a','n','2'])){
        r=m=1;   // Line 368
        k.KDC(8,t);
        k.KO(-1,t,"􀌎");
      }
      else if(k.KFCM(8,t,['s','i','n','c','u','w','a','n'])){
        r=m=1;   // Line 535
        k.KDC(8,t);
        k.KO(-1,t,"􀈪");
      }
      else if(k.KFCM(7,t,['e','n','t','e','k','e','n'])){
        r=m=1;   // Line 269
        k.KDC(7,t);
        k.KO(-1,t,"􀄢");
      }
      else if(k.KFCM(7,t,['h','u','w','o','n','h','o'])){
        r=m=1;   // Line 291
        k.KDC(7,t);
        k.KO(-1,t,"􀄺");
      }
      else if(k.KFCM(7,t,['i','n','k','a','t','a','n'])){
        r=m=1;   // Line 299
        k.KDC(7,t);
        k.KO(-1,t,"􀅂");
      }
      else if(k.KFCM(7,t,['i','n','p','a','l','i','2'])){
        r=m=1;   // Line 301
        k.KDC(7,t);
        k.KO(-1,t,"􀌓");
      }
      else if(k.KFCM(7,t,['i','p','i','n','t','o','2'])){
        r=m=1;   // Line 304
        k.KDC(7,t);
        k.KO(-1,t,"􀌌");
      }
      else if(k.KFCM(7,t,['k','o','n','p','u','t','e'])){
        r=m=1;   // Line 353
        k.KDC(7,t);
        k.KO(-1,t,"􀅴");
      }
      else if(k.KFCM(7,t,['k','o','n','t','a','t','u'])){
        r=m=1;   // Line 354
        k.KDC(7,t);
        k.KO(-1,t,"􀅵");
      }
      else if(k.KFCM(7,t,['k','u','w','e','k','a','n'])){
        r=m=1;   // Line 367
        k.KDC(7,t);
        k.KO(-1,t,"􀆂");
      }
      else if(k.KFCM(7,t,['l','i','m','i','j','e','n'])){
        r=m=1;   // Line 389
        k.KDC(7,t);
        k.KO(-1,t,"􀆗");
      }
      else if(k.KFCM(7,t,['m','u','t','a','k','i','n'])){
        r=m=1;   // Line 428
        k.KDC(7,t);
        k.KO(-1,t,"􀆿");
      }
      else if(k.KFCM(7,t,['n','a','l','i','n','c','a'])){
        r=m=1;   // Line 434
        k.KDC(7,t);
        k.KO(-1,t,"􀇄");
      }
      else if(k.KFCM(7,t,['p','a','n','k','o','s','i'])){
        r=m=1;   // Line 474
        k.KDC(7,t);
        k.KO(-1,t,"􀇫");
      }
      else if(k.KFCM(7,t,['p','e','s','u','w','a','n'])){
        r=m=1;   // Line 491
        k.KDC(7,t);
        k.KO(-1,t,"􀇽");
      }
      else if(k.KFCM(7,t,['p','i','k','a','n','t','e'])){
        r=m=1;   // Line 497
        k.KDC(7,t);
        k.KO(-1,t,"􀈃");
      }
      else if(k.KFCM(7,t,['p','o','w','e','l','e','2'])){
        r=m=1;   // Line 507
        k.KDC(7,t);
        k.KO(-1,t,"􀌘");
      }
      else if(k.KFCM(7,t,['s','a','m','i','n','t','a'])){
        r=m=1;   // Line 517
        k.KDC(7,t);
        k.KO(-1,t,"􀈗");
      }
      else if(k.KFCM(7,t,['s','a','t','a','l','a','n'])){
        r=m=1;   // Line 523
        k.KDC(7,t);
        k.KO(-1,t,"􀈞");
      }
      else if(k.KFCM(7,t,['s','i','n','s','a','s','u'])){
        r=m=1;   // Line 536
        k.KDC(7,t);
        k.KO(-1,t,"􀉺");
      }
      else if(k.KFCM(7,t,['t','i','j','a','n','t','e'])){
        r=m=1;   // Line 576
        k.KDC(7,t);
        k.KO(-1,t,"􀉒");
      }
      else if(k.KFCM(6,t,['a','n','k','o','l','o'])){
        r=m=1;   // Line 242
        k.KDC(6,t);
        k.KO(-1,t,"􀄇");
      }
      else if(k.KFCM(6,t,['a','n','p','i','p','i'])){
        r=m=1;   // Line 243
        k.KDC(6,t);
        k.KO(-1,t,"􀄈");
      }
      else if(k.KFCM(6,t,['a','n','t','o','m','i'])){
        r=m=1;   // Line 244
        k.KDC(6,t);
        k.KO(-1,t,"􀄉");
      }
      else if(k.KFCM(6,t,['a','n','w','i','j','e'])){
        r=m=1;   // Line 245
        k.KDC(6,t);
        k.KO(-1,t,"􀄊");
      }
      else if(k.KFCM(6,t,['c','a','k','u','w','a'])){
        r=m=1;   // Line 249
        k.KDC(6,t);
        k.KO(-1,t,"􀄎");
      }
      else if(k.KFCM(6,t,['c','a','w','a','p','u'])){
        r=m=1;   // Line 252
        k.KDC(6,t);
        k.KO(-1,t,"􀄑");
      }
      else if(k.KFCM(6,t,['h','a','k','i','k','i'])){
        r=m=1;   // Line 272
        k.KDC(6,t);
        k.KO(-1,t,"􀄧");
      }
      else if(k.KFCM(6,t,['h','a','k','o','l','i'])){
        r=m=1;   // Line 273
        k.KDC(6,t);
        k.KO(-1,t,"􀄨");
      }
      else if(k.KFCM(6,t,['h','a','l','u','k','o'])){
        r=m=1;   // Line 274
        k.KDC(6,t);
        k.KO(-1,t,"􀄩");
      }
      else if(k.KFCM(6,t,['h','a','p','i','j','o'])){
        r=m=1;   // Line 276
        k.KDC(6,t);
        k.KO(-1,t,"􀄫");
      }
      else if(k.KFCM(6,t,['h','e','n','e','l','o'])){
        r=m=1;   // Line 281
        k.KDC(6,t);
        k.KO(-1,t,"􀄰");
      }
      else if(k.KFCM(6,t,['h','i','n','p','a','n'])){
        r=m=1;   // Line 282
        k.KDC(6,t);
        k.KO(-1,t,"􀄱");
      }
      else if(k.KFCM(6,t,['i','n','p','a','l','i'])){
        r=m=1;   // Line 300
        k.KDC(6,t);
        k.KO(-1,t,"􀉫");
      }
      else if(k.KFCM(6,t,['i','p','i','n','t','o'])){
        r=m=1;   // Line 303
        k.KDC(6,t);
        k.KO(-1,t,"􀅄");
      }
      else if(k.KFCM(6,t,['k','a','l','a','w','a'])){
        r=m=1;   // Line 323
        k.KDC(6,t);
        k.KO(-1,t,"􀅖");
      }
      else if(k.KFCM(6,t,['k','a','n','i','s','a'])){
        r=m=1;   // Line 326
        k.KDC(6,t);
        k.KO(-1,t,"􀅙");
      }
      else if(k.KFCM(6,t,['k','e','m','i','k','a'])){
        r=m=1;   // Line 334
        k.KDC(6,t);
        k.KO(-1,t,"􀅡");
      }
      else if(k.KFCM(6,t,['k','i','j','e','t','a'])){
        r=m=1;   // Line 337
        k.KDC(6,t);
        k.KO(-1,t,"􀅤");
      }
      else if(k.KFCM(6,t,['k','i','k','u','w','a'])){
        r=m=1;   // Line 340
        k.KDC(6,t);
        k.KO(-1,t,"􀅨");
      }
      else if(k.KFCM(6,t,['k','i','k','o','l','o'])){
        r=m=1;   // Line 341
        k.KDC(6,t);
        k.KO(-1,t,"􀅧");
      }
      else if(k.KFCM(6,t,['k','i','l','i','m','a'])){
        r=m=1;   // Line 342
        k.KDC(6,t);
        k.KO(-1,t,"􀅩");
      }
      else if(k.KFCM(6,t,['k','i','s','o','w','a'])){
        r=m=1;   // Line 345
        k.KDC(6,t);
        k.KO(-1,t,"􀅬");
      }
      else if(k.KFCM(6,t,['k','o','s','o','m','o'])){
        r=m=1;   // Line 356
        k.KDC(6,t);
        k.KO(-1,t,"􀅷");
      }
      else if(k.KFCM(6,t,['k','u','w','o','s','i'])){
        r=m=1;   // Line 369
        k.KDC(6,t);
        k.KO(-1,t,"􀆃");
      }
      else if(k.KFCM(6,t,['l','a','c','i','t','o'])){
        r=m=1;   // Line 371
        k.KDC(6,t);
        k.KO(-1,t,"􀆅");
      }
      else if(k.KFCM(6,t,['l','a','n','t','a','n'])){
        r=m=1;   // Line 378
        k.KDC(6,t);
        k.KO(-1,t,"􀆌");
      }
      else if(k.KFCM(6,t,['l','e','s','e','k','a'])){
        r=m=1;   // Line 383
        k.KDC(6,t);
        k.KO(-1,t,"􀆑");
      }
      else if(k.KFCM(6,t,['l','i','j','u','l','e'])){
        r=m=1;   // Line 385
        k.KDC(6,t);
        k.KO(-1,t,"􀆓");
      }
      else if(k.KFCM(6,t,['m','a','c','i','k','o'])){
        r=m=1;   // Line 400
        k.KDC(6,t);
        k.KO(-1,t,"􀆣");
      }
      else if(k.KFCM(6,t,['m','a','m','a','k','i'])){
        r=m=1;   // Line 405
        k.KDC(6,t);
        k.KO(-1,t,"􀆨");
      }
      else if(k.KFCM(6,t,['m','a','t','i','j','a'])){
        r=m=1;   // Line 407
        k.KDC(6,t);
        k.KO(-1,t,"􀆪");
      }
      else if(k.KFCM(6,t,['m','a','t','u','w','a'])){
        r=m=1;   // Line 409
        k.KDC(6,t);
        k.KO(-1,t,"􀆬");
      }
      else if(k.KFCM(6,t,['m','i','j','a','l','o'])){
        r=m=1;   // Line 419
        k.KDC(6,t);
        k.KO(-1,t,"􀆶");
      }
      else if(k.KFCM(6,t,['m','u','w','e','s','i'])){
        r=m=1;   // Line 429
        k.KDC(6,t);
        k.KO(-1,t,"􀇀");
      }
      else if(k.KFCM(6,t,['n','a','m','u','n','a'])){
        r=m=1;   // Line 436
        k.KDC(6,t);
        k.KO(-1,t,"􀇆");
      }
      else if(k.KFCM(6,t,['n','a','n','k','i','n'])){
        r=m=1;   // Line 438
        k.KDC(6,t);
        k.KO(-1,t,"􀇈");
      }
      else if(k.KFCM(6,t,['p','a','n','s','i','n'])){
        r=m=1;   // Line 476
        k.KDC(6,t);
        k.KO(-1,t,"􀇭");
      }
      else if(k.KFCM(6,t,['p','e','l','e','t','e'])){
        r=m=1;   // Line 486
        k.KDC(6,t);
        k.KO(-1,t,"􀇷");
      }
      else if(k.KFCM(6,t,['p','i','c','i','j','o'])){
        r=m=1;   // Line 495
        k.KDC(6,t);
        k.KO(-1,t,"􀈁");
      }
      else if(k.KFCM(6,t,['p','o','l','o','k','o'])){
        r=m=1;   // Line 502
        k.KDC(6,t);
        k.KO(-1,t,"􀈉");
      }
      else if(k.KFCM(6,t,['p','o','l','o','t','a'])){
        r=m=1;   // Line 504
        k.KDC(6,t);
        k.KO(-1,t,"􀈋");
      }
      else if(k.KFCM(6,t,['p','o','w','e','l','e'])){
        r=m=1;   // Line 506
        k.KDC(6,t);
        k.KO(-1,t,"􀉾");
      }
      else if(k.KFCM(6,t,['p','u','l','u','s','i'])){
        r=m=1;   // Line 512
        k.KDC(6,t);
        k.KO(-1,t,"􀈓");
      }
      else if(k.KFCM(6,t,['s','a','l','i','l','a'])){
        r=m=1;   // Line 515
        k.KDC(6,t);
        k.KO(-1,t,"􀈕");
      }
      else if(k.KFCM(6,t,['s','a','n','k','a','n'])){
        r=m=1;   // Line 519
        k.KDC(6,t);
        k.KO(-1,t,"􀈚");
      }
      else if(k.KFCM(6,t,['s','a','p','o','l','e'])){
        r=m=1;   // Line 522
        k.KDC(6,t);
        k.KO(-1,t,"􀈝");
      }
      else if(k.KFCM(6,t,['s','a','t','i','l','u'])){
        r=m=1;   // Line 524
        k.KDC(6,t);
        k.KO(-1,t,"􀈟");
      }
      else if(k.KFCM(6,t,['s','e','k','a','n','u'])){
        r=m=1;   // Line 527
        k.KDC(6,t);
        k.KO(-1,t,"􀈢");
      }
      else if(k.KFCM(6,t,['s','i','t','i','j','a'])){
        r=m=1;   // Line 539
        k.KDC(6,t);
        k.KO(-1,t,"􀈭");
      }
      else if(k.KFCM(6,t,['s','u','n','a','j','a'])){
        r=m=1;   // Line 549
        k.KDC(6,t);
        k.KO(-1,t,"􀈷");
      }
      else if(k.KFCM(6,t,['s','u','n','k','a','n'])){
        r=m=1;   // Line 550
        k.KDC(6,t);
        k.KO(-1,t,"􀈸");
      }
      else if(k.KFCM(6,t,['s','u','w','i','n','a'])){
        r=m=1;   // Line 551
        k.KDC(6,t);
        k.KO(-1,t,"􀈹");
      }
      else if(k.KFCM(6,t,['t','a','j','a','l','i'])){
        r=m=1;   // Line 553
        k.KDC(6,t);
        k.KO(-1,t,"􀈻");
      }
      else if(k.KFCM(6,t,['t','a','k','a','h','a'])){
        r=m=1;   // Line 555
        k.KDC(6,t);
        k.KO(-1,t,"􀈽");
      }
      else if(k.KFCM(6,t,['t','a','k','i','l','o'])){
        r=m=1;   // Line 556
        k.KDC(6,t);
        k.KO(-1,t,"􀈾");
      }
      else if(k.KFCM(6,t,['t','a','l','i','k','a'])){
        r=m=1;   // Line 557
        k.KDC(6,t);
        k.KO(-1,t,"􀈿");
      }
      else if(k.KFCM(6,t,['t','a','l','i','l','i'])){
        r=m=1;   // Line 558
        k.KDC(6,t);
        k.KO(-1,t,"􀉀");
      }
      else if(k.KFCM(6,t,['t','a','m','a','k','a'])){
        r=m=1;   // Line 560
        k.KDC(6,t);
        k.KO(-1,t,"􀉂");
      }
      else if(k.KFCM(6,t,['t','a','p','a','l','a'])){
        r=m=1;   // Line 563
        k.KDC(6,t);
        k.KO(-1,t,"􀉅");
      }
      else if(k.KFCM(6,t,['t','a','s','u','w','i'])){
        r=m=1;   // Line 565
        k.KDC(6,t);
        k.KO(-1,t,"􀉇");
      }
      else if(k.KFCM(6,t,['t','a','w','a','w','a'])){
        r=m=1;   // Line 567
        k.KDC(6,t);
        k.KO(-1,t,"􀉽");
      }
      else if(k.KFCM(6,t,['t','e','n','e','m','e'])){
        r=m=1;   // Line 573
        k.KDC(6,t);
        k.KO(-1,t,"􀉏");
      }
      else if(k.KFCM(6,t,['t','o','m','i','w','a'])){
        r=m=1;   // Line 584
        k.KDC(6,t);
        k.KO(-1,t,"􀉛");
      }
      else if(k.KFCM(6,t,['t','u','n','t','a','n'])){
        r=m=1;   // Line 593
        k.KDC(6,t);
        k.KO(-1,t,"􀉣");
      }
      else if(k.KFCM(6,t,['u','l','o','k','a','n'])){
        r=m=1;   // Line 598
        k.KDC(6,t);
        k.KO(-1,t,"􀉤");
      }
      else if(k.KFCM(6,t,['w','o','n','p','a','2'])){
        r=m=1;   // Line 617
        k.KDC(6,t);
        k.KO(-1,t,"􀌛");
      }
      else if(k.KFCM(6,t,['k','o','k','a','n','u'])){
        r=m=1;   // Line 629
        k.KDC(6,t);
        k.KO(-1,t,"􀋿");
      }
      else if(k.KFCM(6,t,['K','o','k','a','n','u'])){
        r=m=1;   // Line 630
        k.KDC(6,t);
        k.KO(-1,t,"􀋿");
      }
      else if(k.KFCM(5,t,['a','k','a','l','a'])){
        r=m=1;   // Line 236
        k.KDC(5,t);
        k.KO(-1,t,"􀄀");
      }
      else if(k.KFCM(5,t,['a','k','a','s','a'])){
        r=m=1;   // Line 237
        k.KDC(5,t);
        k.KO(-1,t,"􀄁");
      }
      else if(k.KFCM(5,t,['a','p','a','k','i'])){
        r=m=1;   // Line 246
        k.KDC(5,t);
        k.KO(-1,t,"􀄋");
      }
      else if(k.KFCM(5,t,['a','s','e','t','e'])){
        r=m=1;   // Line 248
        k.KDC(5,t);
        k.KO(-1,t,"􀄍");
      }
      else if(k.KFCM(5,t,['c','a','n','w','a'])){
        r=m=1;   // Line 251
        k.KDC(5,t);
        k.KO(-1,t,"􀄐");
      }
      else if(k.KFCM(5,t,['c','e','n','c','i'])){
        r=m=1;   // Line 255
        k.KDC(5,t);
        k.KO(-1,t,"􀄔");
      }
      else if(k.KFCM(5,t,['c','e','n','p','o'])){
        r=m=1;   // Line 256
        k.KDC(5,t);
        k.KO(-1,t,"􀄕");
      }
      else if(k.KFCM(5,t,['c','o','n','t','o'])){
        r=m=1;   // Line 262
        k.KDC(5,t);
        k.KO(-1,t,"􀄛");
      }
      else if(k.KFCM(5,t,['c','o','n','c','a'])){
        r=m=1;   // Line 263
        k.KDC(5,t);
        k.KO(-1,t,"􀄜");
      }
      else if(k.KFCM(5,t,['c','o','n','p','u'])){
        r=m=1;   // Line 266
        k.KDC(5,t);
        k.KO(-1,t,"􀄟");
      }
      if(m) {}
      else if(k.KFCM(5,t,['h','o','n','j','a'])){
        r=m=1;   // Line 284
        k.KDC(5,t);
        k.KO(-1,t,"􀄳");
      }
      else if(k.KFCM(5,t,['h','o','t','o','n'])){
        r=m=1;   // Line 285
        k.KDC(5,t);
        k.KO(-1,t,"􀄴");
      }
      else if(k.KFCM(5,t,['h','u','k','u','n'])){
        r=m=1;   // Line 287
        k.KDC(5,t);
        k.KO(-1,t,"􀄶");
      }
      else if(k.KFCM(5,t,['h','u','n','s','i'])){
        r=m=1;   // Line 288
        k.KDC(5,t);
        k.KO(-1,t,"􀄷");
      }
      else if(k.KFCM(5,t,['i','h','a','m','o'])){
        r=m=1;   // Line 292
        k.KDC(5,t);
        k.KO(-1,t,"􀄻");
      }
      else if(k.KFCM(5,t,['i','k','a','m','a'])){
        r=m=1;   // Line 293
        k.KDC(5,t);
        k.KO(-1,t,"􀄼");
      }
      else if(k.KFCM(5,t,['i','k','a','s','i'])){
        r=m=1;   // Line 294
        k.KDC(5,t);
        k.KO(-1,t,"􀄽");
      }
      else if(k.KFCM(5,t,['i','n','a','l','o'])){
        r=m=1;   // Line 298
        k.KDC(5,t);
        k.KO(-1,t,"􀅁");
      }
      else if(k.KFCM(5,t,['i','p','u','w','e'])){
        r=m=1;   // Line 305
        k.KDC(5,t);
        k.KO(-1,t,"􀅅");
      }
      else if(k.KFCM(5,t,['j','a','m','i','n'])){
        r=m=1;   // Line 308
        k.KDC(5,t);
        k.KO(-1,t,"􀅈");
      }
      else if(k.KFCM(5,t,['j','a','n','l','u'])){
        r=m=1;   // Line 310
        k.KDC(5,t);
        k.KO(-1,t,"􀅊");
      }
      else if(k.KFCM(5,t,['j','a','t','a','n'])){
        r=m=1;   // Line 311
        k.KDC(5,t);
        k.KO(-1,t,"􀅋");
      }
      else if(k.KFCM(5,t,['k','a','l','a','n'])){
        r=m=1;   // Line 322
        k.KDC(5,t);
        k.KO(-1,t,"􀅕");
      }
      else if(k.KFCM(5,t,['k','a','n','t','a'])){
        r=m=1;   // Line 327
        k.KDC(5,t);
        k.KO(-1,t,"􀅚");
      }
      else if(k.KFCM(5,t,['k','a','p','a','n'])){
        r=m=1;   // Line 328
        k.KDC(5,t);
        k.KO(-1,t,"􀅛");
      }
      else if(k.KFCM(5,t,['k','a','t','i','n'])){
        r=m=1;   // Line 331
        k.KDC(5,t);
        k.KO(-1,t,"􀅞");
      }
      else if(k.KFCM(5,t,['k','e','n','c','a'])){
        r=m=1;   // Line 335
        k.KDC(5,t);
        k.KO(-1,t,"􀅢");
      }
      else if(k.KFCM(5,t,['k','o','m','a','n'])){
        r=m=1;   // Line 347
        k.KDC(5,t);
        k.KO(-1,t,"􀅮");
      }
      else if(k.KFCM(5,t,['k','o','n','c','o'])){
        r=m=1;   // Line 348
        k.KDC(5,t);
        k.KO(-1,t,"􀅯");
      }
      else if(k.KFCM(5,t,['k','o','n','e','n'])){
        r=m=1;   // Line 349
        k.KDC(5,t);
        k.KO(-1,t,"􀅰");
      }
      else if(k.KFCM(5,t,['k','o','n','j','e'])){
        r=m=1;   // Line 350
        k.KDC(5,t);
        k.KO(-1,t,"􀅱");
      }
      else if(k.KFCM(5,t,['k','o','n','p','a'])){
        r=m=1;   // Line 352
        k.KDC(5,t);
        k.KO(-1,t,"􀅳");
      }
      else if(k.KFCM(5,t,['k','o','s','a','n'])){
        r=m=1;   // Line 355
        k.KDC(5,t);
        k.KO(-1,t,"􀅶");
      }
      else if(k.KFCM(5,t,['k','u','m','o','n'])){
        r=m=1;   // Line 362
        k.KDC(5,t);
        k.KO(-1,t,"􀅽");
      }
      else if(k.KFCM(5,t,['k','u','w','a','n'])){
        r=m=1;   // Line 366
        k.KDC(5,t);
        k.KO(-1,t,"􀆁");
      }
      else if(k.KFCM(5,t,['l','a','n','k','i'])){
        r=m=1;   // Line 376
        k.KDC(5,t);
        k.KO(-1,t,"􀆊");
      }
      else if(k.KFCM(5,t,['l','a','n','s','a'])){
        r=m=1;   // Line 377
        k.KDC(5,t);
        k.KO(-1,t,"􀆋");
      }
      else if(k.KFCM(5,t,['l','e','k','i','n'])){
        r=m=1;   // Line 380
        k.KDC(5,t);
        k.KO(-1,t,"􀆎");
      }
      else if(k.KFCM(5,t,['l','e','n','k','a'])){
        r=m=1;   // Line 382
        k.KDC(5,t);
        k.KO(-1,t,"􀆐");
      }
      else if(k.KFCM(5,t,['l','i','p','a','n'])){
        r=m=1;   // Line 388
        k.KDC(5,t);
        k.KO(-1,t,"􀆖");
      }
      else if(k.KFCM(5,t,['l','u','n','t','i'])){
        r=m=1;   // Line 398
        k.KDC(5,t);
        k.KO(-1,t,"􀆡");
      }
      else if(k.KFCM(5,t,['m','a','c','u','n'])){
        r=m=1;   // Line 401
        k.KDC(5,t);
        k.KO(-1,t,"􀆤");
      }
      else if(k.KFCM(5,t,['m','a','k','a','n'])){
        r=m=1;   // Line 402
        k.KDC(5,t);
        k.KO(-1,t,"􀆥");
      }
      else if(k.KFCM(5,t,['m','a','t','i','n'])){
        r=m=1;   // Line 408
        k.KDC(5,t);
        k.KO(-1,t,"􀆫");
      }
      else if(k.KFCM(5,t,['m','e','l','o','n'])){
        r=m=1;   // Line 411
        k.KDC(5,t);
        k.KO(-1,t,"􀆮");
      }
      else if(k.KFCM(5,t,['m','e','n','w','o'])){
        r=m=1;   // Line 414
        k.KDC(5,t);
        k.KO(-1,t,"􀆱");
      }
      else if(k.KFCM(5,t,['m','i','c','i','n'])){
        r=m=1;   // Line 418
        k.KDC(5,t);
        k.KO(-1,t,"􀆵");
      }
      else if(k.KFCM(5,t,['m','u','n','c','u'])){
        r=m=1;   // Line 426
        k.KDC(5,t);
        k.KO(-1,t,"􀆽");
      }
      else if(k.KFCM(5,t,['n','a','k','i','2'])){
        r=m=1;   // Line 432
        k.KDC(5,t);
        k.KO(-1,t,"􀌔");
      }
      else if(k.KFCM(5,t,['n','a','l','a','n'])){
        r=m=1;   // Line 433
        k.KDC(5,t);
        k.KO(-1,t,"􀇃");
      }
      else if(k.KFCM(5,t,['n','a','s','e','2'])){
        r=m=1;   // Line 441
        k.KDC(5,t);
        k.KO(-1,t,"􀇋");
      }
      else if(k.KFCM(5,t,['n','e','n','k','a'])){
        r=m=1;   // Line 445
        k.KDC(5,t);
        k.KO(-1,t,"􀇏");
      }
      else if(k.KFCM(5,t,['o','c','o','t','a'])){
        r=m=1;   // Line 457
        k.KDC(5,t);
        k.KO(-1,t,"􀇛");
      }
      else if(k.KFCM(5,t,['o','k','u','t','u'])){
        r=m=1;   // Line 459
        k.KDC(5,t);
        k.KO(-1,t,"􀇝");
      }
      else if(k.KFCM(5,t,['o','n','i','n','2'])){
        r=m=1;   // Line 461
        k.KDC(5,t);
        k.KO(-1,t,"􀌖");
      }
      else if(k.KFCM(5,t,['o','n','t','o','n'])){
        r=m=1;   // Line 463
        k.KDC(5,t);
        k.KO(-1,t,"􀇠");
      }
      else if(k.KFCM(5,t,['o','p','o','k','i'])){
        r=m=1;   // Line 464
        k.KDC(5,t);
        k.KO(-1,t,"􀇡");
      }
      else if(k.KFCM(5,t,['o','p','o','t','u'])){
        r=m=1;   // Line 465
        k.KDC(5,t);
        k.KO(-1,t,"􀇢");
      }
      else if(k.KFCM(5,t,['o','s','o','l','e'])){
        r=m=1;   // Line 467
        k.KDC(5,t);
        k.KO(-1,t,"􀇤");
      }
      else if(k.KFCM(5,t,['o','t','a','w','e'])){
        r=m=1;   // Line 468
        k.KDC(5,t);
        k.KO(-1,t,"􀇥");
      }
      else if(k.KFCM(5,t,['p','a','j','a','n'])){
        r=m=1;   // Line 471
        k.KDC(5,t);
        k.KO(-1,t,"􀇨");
      }
      else if(k.KFCM(5,t,['p','a','n','l','i'])){
        r=m=1;   // Line 475
        k.KDC(5,t);
        k.KO(-1,t,"􀇬");
      }
      else if(k.KFCM(5,t,['p','a','n','t','a'])){
        r=m=1;   // Line 477
        k.KDC(5,t);
        k.KO(-1,t,"􀇮");
      }
      else if(k.KFCM(5,t,['p','a','p','o','n'])){
        r=m=1;   // Line 478
        k.KDC(5,t);
        k.KO(-1,t,"􀇯");
      }
      else if(k.KFCM(5,t,['p','a','s','a','n'])){
        r=m=1;   // Line 479
        k.KDC(5,t);
        k.KO(-1,t,"􀇰");
      }
      else if(k.KFCM(5,t,['p','a','t','u','n'])){
        r=m=1;   // Line 482
        k.KDC(5,t);
        k.KO(-1,t,"􀇳");
      }
      else if(k.KFCM(5,t,['p','e','m','a','n'])){
        r=m=1;   // Line 487
        k.KDC(5,t);
        k.KO(-1,t,"􀇸");
      }
      else if(k.KFCM(5,t,['p','e','n','p','e'])){
        r=m=1;   // Line 489
        k.KDC(5,t);
        k.KO(-1,t,"􀇺");
      }
      else if(k.KFCM(5,t,['p','i','j','e','n'])){
        r=m=1;   // Line 494
        k.KDC(5,t);
        k.KO(-1,t,"􀈀");
      }
      else if(k.KFCM(5,t,['p','i','n','k','o'])){
        r=m=1;   // Line 498
        k.KDC(5,t);
        k.KO(-1,t,"􀈅");
      }
      else if(k.KFCM(5,t,['p','i','n','t','u'])){
        r=m=1;   // Line 499
        k.KDC(5,t);
        k.KO(-1,t,"􀈆");
      }
      else if(k.KFCM(5,t,['p','o','l','a','n'])){
        r=m=1;   // Line 501
        k.KDC(5,t);
        k.KO(-1,t,"􀈈");
      }
      else if(k.KFCM(5,t,['p','u','c','o','n'])){
        r=m=1;   // Line 508
        k.KDC(5,t);
        k.KO(-1,t,"􀈍");
      }
      else if(k.KFCM(5,t,['s','a','m','a','n'])){
        r=m=1;   // Line 516
        k.KDC(5,t);
        k.KO(-1,t,"􀈖");
      }
      else if(k.KFCM(5,t,['s','a','n','t','i'])){
        r=m=1;   // Line 520
        k.KDC(5,t);
        k.KO(-1,t,"􀈛");
      }
      else if(k.KFCM(5,t,['s','e','p','o','2'])){
        r=m=1;   // Line 530
        k.KDC(5,t);
        k.KO(-1,t,"􀈤");
      }
      else if(k.KFCM(5,t,['s','i','j','e','n'])){
        r=m=1;   // Line 531
        k.KDC(5,t);
        k.KO(-1,t,"􀈦");
      }
      else if(k.KFCM(5,t,['s','i','k','i','n'])){
        r=m=1;   // Line 532
        k.KDC(5,t);
        k.KO(-1,t,"􀈧");
      }
      else if(k.KFCM(5,t,['s','i','n','s','i'])){
        r=m=1;   // Line 537
        k.KDC(5,t);
        k.KO(-1,t,"􀈫");
      }
      else if(k.KFCM(5,t,['t','a','j','e','n'])){
        r=m=1;   // Line 554
        k.KDC(5,t);
        k.KO(-1,t,"􀈼");
      }
      else if(k.KFCM(5,t,['t','a','l','u','n'])){
        r=m=1;   // Line 559
        k.KDC(5,t);
        k.KO(-1,t,"􀉁");
      }
      else if(k.KFCM(5,t,['t','a','m','i','n'])){
        r=m=1;   // Line 561
        k.KDC(5,t);
        k.KO(-1,t,"􀉃");
      }
      else if(k.KFCM(5,t,['t','a','s','o','n'])){
        r=m=1;   // Line 564
        k.KDC(5,t);
        k.KO(-1,t,"􀉆");
      }
      else if(k.KFCM(5,t,['t','e','n','j','a'])){
        r=m=1;   // Line 574
        k.KDC(5,t);
        k.KO(-1,t,"􀉐");
      }
      else if(k.KFCM(5,t,['t','i','n','k','i'])){
        r=m=1;   // Line 580
        k.KDC(5,t);
        k.KO(-1,t,"􀉲");
      }
      else if(k.KFCM(5,t,['t','i','t','a','n'])){
        r=m=1;   // Line 582
        k.KDC(5,t);
        k.KO(-1,t,"􀉴");
      }
      else if(k.KFCM(5,t,['t','o','n','k','o'])){
        r=m=1;   // Line 586
        k.KDC(5,t);
        k.KO(-1,t,"􀉜");
      }
      else if(k.KFCM(5,t,['u','j','a','n','u'])){
        r=m=1;   // Line 594
        k.KDC(5,t);
        k.KO(-1,t,"􀉗");
      }
      else if(k.KFCM(5,t,['u','k','a','m','a'])){
        r=m=1;   // Line 595
        k.KDC(5,t);
        k.KO(-1,t,"􀉦");
      }
      else if(k.KFCM(5,t,['u','k','i','k','i'])){
        r=m=1;   // Line 596
        k.KDC(5,t);
        k.KO(-1,t,"􀉘");
      }
      else if(k.KFCM(5,t,['u','m','a','m','i'])){
        r=m=1;   // Line 599
        k.KDC(5,t);
        k.KO(-1,t,"􀉥");
      }
      else if(k.KFCM(5,t,['u','n','i','t','u'])){
        r=m=1;   // Line 602
        k.KDC(5,t);
        k.KO(-1,t,"􀉨");
      }
      else if(k.KFCM(5,t,['u','s','e','n','2'])){
        r=m=1;   // Line 604
        k.KDC(5,t);
        k.KO(-1,t,"􀉮");
      }
      else if(k.KFCM(5,t,['w','a','t','a','n'])){
        r=m=1;   // Line 607
        k.KDC(5,t);
        k.KO(-1,t,"􀉊");
      }
      else if(k.KFCM(5,t,['w','i','s','a','n'])){
        r=m=1;   // Line 608
        k.KDC(5,t);
        k.KO(-1,t,"􀉖");
      }
      else if(k.KFCM(5,t,['w','a','n','k','u'])){
        r=m=1;   // Line 609
        k.KDC(5,t);
        k.KO(-1,t,"􀉪");
      }
      else if(k.KFCM(5,t,['w','o','n','p','a'])){
        r=m=1;   // Line 616
        k.KDC(5,t);
        k.KO(-1,t,"􀉼");
      }
      else if(k.KFCM(4,t,['a','n','a','n'])){
        r=m=1;   // Line 240
        k.KDC(4,t);
        k.KO(-1,t,"􀄅");
      }
      else if(k.KFCM(4,t,['c','a','n','u'])){
        r=m=1;   // Line 250
        k.KDC(4,t);
        k.KO(-1,t,"􀄏");
      }
      else if(k.KFCM(4,t,['c','e','k','e'])){
        r=m=1;   // Line 253
        k.KDC(4,t);
        k.KO(-1,t,"􀄒");
      }
      else if(k.KFCM(4,t,['c','e','l','e'])){
        r=m=1;   // Line 254
        k.KDC(4,t);
        k.KO(-1,t,"􀄓");
      }
      else if(k.KFCM(4,t,['c','i','m','i'])){
        r=m=1;   // Line 258
        k.KDC(4,t);
        k.KO(-1,t,"􀄗");
      }
      else if(k.KFCM(4,t,['c','i','n','a'])){
        r=m=1;   // Line 259
        k.KDC(4,t);
        k.KO(-1,t,"􀄘");
      }
      else if(k.KFCM(4,t,['c','o','h','i'])){
        r=m=1;   // Line 260
        k.KDC(4,t);
        k.KO(-1,t,"􀄙");
      }
      else if(k.KFCM(4,t,['c','u','m','a'])){
        r=m=1;   // Line 264
        k.KDC(4,t);
        k.KO(-1,t,"􀄝");
      }
      else if(k.KFCM(4,t,['c','u','n','e'])){
        r=m=1;   // Line 265
        k.KDC(4,t);
        k.KO(-1,t,"􀄞");
      }
      else if(k.KFCM(4,t,['c','u','w','i'])){
        r=m=1;   // Line 267
        k.KDC(4,t);
        k.KO(-1,t,"􀄠");
      }
      else if(k.KFCM(4,t,['e','w','i','n'])){
        r=m=1;   // Line 270
        k.KDC(4,t);
        k.KO(-1,t,"􀄤");
      }
      else if(k.KFCM(4,t,['h','a','j','a'])){
        r=m=1;   // Line 271
        k.KDC(4,t);
        k.KO(-1,t,"􀄦");
      }
      else if(k.KFCM(4,t,['h','a','s','o'])){
        r=m=1;   // Line 277
        k.KDC(4,t);
        k.KO(-1,t,"􀄬");
      }
      if(m) {}
      else if(k.KFCM(4,t,['h','e','l','a'])){
        r=m=1;   // Line 279
        k.KDC(4,t);
        k.KO(-1,t,"􀄮");
      }
      else if(k.KFCM(4,t,['h','u','s','u'])){
        r=m=1;   // Line 289
        k.KDC(4,t);
        k.KO(-1,t,"􀄸");
      }
      else if(k.KFCM(4,t,['h','u','w','a'])){
        r=m=1;   // Line 290
        k.KDC(4,t);
        k.KO(-1,t,"􀄹");
      }
      else if(k.KFCM(4,t,['i','m','a','n'])){
        r=m=1;   // Line 296
        k.KDC(4,t);
        k.KO(-1,t,"􀄿");
      }
      else if(k.KFCM(4,t,['i','n','s','u'])){
        r=m=1;   // Line 302
        k.KDC(4,t);
        k.KO(-1,t,"􀅃");
      }
      else if(k.KFCM(4,t,['j','a','t','i'])){
        r=m=1;   // Line 312
        k.KDC(4,t);
        k.KO(-1,t,"􀅌");
      }
      else if(k.KFCM(4,t,['j','o','l','i'])){
        r=m=1;   // Line 314
        k.KDC(4,t);
        k.KO(-1,t,"􀅎");
      }
      else if(k.KFCM(4,t,['j','o','n','e'])){
        r=m=1;   // Line 316
        k.KDC(4,t);
        k.KO(-1,t,"􀅐");
      }
      else if(k.KFCM(4,t,['j','u','k','a'])){
        r=m=1;   // Line 318
        k.KDC(4,t);
        k.KO(-1,t,"􀅒");
      }
      else if(k.KFCM(4,t,['j','u','t','u'])){
        r=m=1;   // Line 319
        k.KDC(4,t);
        k.KO(-1,t,"􀈄");
      }
      else if(k.KFCM(4,t,['k','a','k','i'])){
        r=m=1;   // Line 321
        k.KDC(4,t);
        k.KO(-1,t,"􀅔");
      }
      else if(k.KFCM(4,t,['k','a','l','i'])){
        r=m=1;   // Line 324
        k.KDC(4,t);
        k.KO(-1,t,"􀅗");
      }
      else if(k.KFCM(4,t,['k','a','p','u'])){
        r=m=1;   // Line 329
        k.KDC(4,t);
        k.KO(-1,t,"􀅜");
      }
      else if(k.KFCM(4,t,['k','a','t','e'])){
        r=m=1;   // Line 330
        k.KDC(4,t);
        k.KO(-1,t,"􀅝");
      }
      else if(k.KFCM(4,t,['k','a','w','a'])){
        r=m=1;   // Line 332
        k.KDC(4,t);
        k.KO(-1,t,"􀅟");
      }
      else if(k.KFCM(4,t,['k','e','l','a'])){
        r=m=1;   // Line 333
        k.KDC(4,t);
        k.KO(-1,t,"􀅠");
      }
      else if(k.KFCM(4,t,['k','i','j','u'])){
        r=m=1;   // Line 338
        k.KDC(4,t);
        k.KO(-1,t,"􀅥");
      }
      else if(k.KFCM(4,t,['k','i','k','e'])){
        r=m=1;   // Line 339
        k.KDC(4,t);
        k.KO(-1,t,"􀅦");
      }
      else if(k.KFCM(4,t,['k','i','s','a'])){
        r=m=1;   // Line 344
        k.KDC(4,t);
        k.KO(-1,t,"􀅫");
      }
      else if(k.KFCM(4,t,['k','o','t','a'])){
        r=m=1;   // Line 357
        k.KDC(4,t);
        k.KO(-1,t,"􀅸");
      }
      else if(k.KFCM(4,t,['k','u','j','o'])){
        r=m=1;   // Line 358
        k.KDC(4,t);
        k.KO(-1,t,"􀅹");
      }
      else if(k.KFCM(4,t,['k','u','k','u'])){
        r=m=1;   // Line 359
        k.KDC(4,t);
        k.KO(-1,t,"􀅺");
      }
      else if(k.KFCM(4,t,['k','u','l','a'])){
        r=m=1;   // Line 360
        k.KDC(4,t);
        k.KO(-1,t,"􀅻");
      }
      else if(k.KFCM(4,t,['k','u','m','i'])){
        r=m=1;   // Line 361
        k.KDC(4,t);
        k.KO(-1,t,"􀅼");
      }
      else if(k.KFCM(4,t,['k','u','s','a'])){
        r=m=1;   // Line 364
        k.KDC(4,t);
        k.KO(-1,t,"􀅿");
      }
      else if(k.KFCM(4,t,['k','u','t','o'])){
        r=m=1;   // Line 365
        k.KDC(4,t);
        k.KO(-1,t,"􀆀");
      }
      else if(k.KFCM(4,t,['l','a','h','a'])){
        r=m=1;   // Line 372
        k.KDC(4,t);
        k.KO(-1,t,"􀆆");
      }
      else if(k.KFCM(4,t,['l','a','k','i'])){
        r=m=1;   // Line 373
        k.KDC(4,t);
        k.KO(-1,t,"􀆇");
      }
      else if(k.KFCM(4,t,['l','a','m','o'])){
        r=m=1;   // Line 374
        k.KDC(4,t);
        k.KO(-1,t,"􀆈");
      }
      else if(k.KFCM(4,t,['l','i','j','e'])){
        r=m=1;   // Line 384
        k.KDC(4,t);
        k.KO(-1,t,"􀆒");
      }
      else if(k.KFCM(4,t,['l','i','k','a'])){
        r=m=1;   // Line 386
        k.KDC(4,t);
        k.KO(-1,t,"􀆔");
      }
      else if(k.KFCM(4,t,['l','i','l','i'])){
        r=m=1;   // Line 387
        k.KDC(4,t);
        k.KO(-1,t,"􀉿");
      }
      else if(k.KFCM(4,t,['l','i','p','u'])){
        r=m=1;   // Line 390
        k.KDC(4,t);
        k.KO(-1,t,"􀆙");
      }
      else if(k.KFCM(4,t,['l','i','s','i'])){
        r=m=1;   // Line 391
        k.KDC(4,t);
        k.KO(-1,t,"􀆚");
      }
      else if(k.KFCM(4,t,['l','i','t','o'])){
        r=m=1;   // Line 392
        k.KDC(4,t);
        k.KO(-1,t,"􀆛");
      }
      else if(k.KFCM(4,t,['m','o','n','a'])){
        r=m=1;   // Line 394
        k.KDC(4,t);
        k.KO(-1,t,"􀆝");
      }
      else if(k.KFCM(4,t,['l','o','s','o'])){
        r=m=1;   // Line 395
        k.KDC(4,t);
        k.KO(-1,t,"􀆞");
      }
      else if(k.KFCM(4,t,['l','u','k','a'])){
        r=m=1;   // Line 396
        k.KDC(4,t);
        k.KO(-1,t,"􀆟");
      }
      else if(k.KFCM(4,t,['l','u','w','a'])){
        r=m=1;   // Line 399
        k.KDC(4,t);
        k.KO(-1,t,"􀆢");
      }
      else if(k.KFCM(4,t,['m','a','k','u'])){
        r=m=1;   // Line 403
        k.KDC(4,t);
        k.KO(-1,t,"􀆦");
      }
      else if(k.KFCM(4,t,['m','a','l','o'])){
        r=m=1;   // Line 404
        k.KDC(4,t);
        k.KO(-1,t,"􀆧");
      }
      else if(k.KFCM(4,t,['m','a','n','i'])){
        r=m=1;   // Line 406
        k.KDC(4,t);
        k.KO(-1,t,"􀆩");
      }
      else if(k.KFCM(4,t,['m','e','j','a'])){
        r=m=1;   // Line 410
        k.KDC(4,t);
        k.KO(-1,t,"􀆭");
      }
      else if(k.KFCM(4,t,['m','e','n','u'])){
        r=m=1;   // Line 413
        k.KDC(4,t);
        k.KO(-1,t,"􀆰");
      }
      else if(k.KFCM(4,t,['m','e','p','u'])){
        r=m=1;   // Line 415
        k.KDC(4,t);
        k.KO(-1,t,"􀆲");
      }
      else if(k.KFCM(4,t,['m','e','s','e'])){
        r=m=1;   // Line 416
        k.KDC(4,t);
        k.KO(-1,t,"􀆳");
      }
      else if(k.KFCM(4,t,['m','i','t','a'])){
        r=m=1;   // Line 420
        k.KDC(4,t);
        k.KO(-1,t,"􀆷");
      }
      else if(k.KFCM(4,t,['m','o','m','u'])){
        r=m=1;   // Line 421
        k.KDC(4,t);
        k.KO(-1,t,"􀆸");
      }
      else if(k.KFCM(4,t,['m','o','t','o'])){
        r=m=1;   // Line 422
        k.KDC(4,t);
        k.KO(-1,t,"􀆹");
      }
      else if(k.KFCM(4,t,['m','u','k','u'])){
        r=m=1;   // Line 424
        k.KDC(4,t);
        k.KO(-1,t,"􀆻");
      }
      else if(k.KFCM(4,t,['m','u','l','u'])){
        r=m=1;   // Line 425
        k.KDC(4,t);
        k.KO(-1,t,"􀆼");
      }
      else if(k.KFCM(4,t,['m','u','s','i'])){
        r=m=1;   // Line 427
        k.KDC(4,t);
        k.KO(-1,t,"􀆾");
      }
      else if(k.KFCM(4,t,['n','a','k','i'])){
        r=m=1;   // Line 431
        k.KDC(4,t);
        k.KO(-1,t,"􀇂");
      }
      else if(k.KFCM(4,t,['n','a','m','u'])){
        r=m=1;   // Line 435
        k.KDC(4,t);
        k.KO(-1,t,"􀇅");
      }
      else if(k.KFCM(4,t,['n','a','p','a'])){
        r=m=1;   // Line 439
        k.KDC(4,t);
        k.KO(-1,t,"􀇊");
      }
      else if(k.KFCM(4,t,['n','a','s','e'])){
        r=m=1;   // Line 440
        k.KDC(4,t);
        k.KO(-1,t,"􀌁");
      }
      else if(k.KFCM(4,t,['n','e','j','e'])){
        r=m=1;   // Line 443
        k.KDC(4,t);
        k.KO(-1,t,"􀇍");
      }
      else if(k.KFCM(4,t,['n','e','l','o'])){
        r=m=1;   // Line 444
        k.KDC(4,t);
        k.KO(-1,t,"􀇎");
      }
      else if(k.KFCM(4,t,['n','e','p','a'])){
        r=m=1;   // Line 446
        k.KDC(4,t);
        k.KO(-1,t,"􀇐");
      }
      else if(k.KFCM(4,t,['n','e','s','o'])){
        r=m=1;   // Line 447
        k.KDC(4,t);
        k.KO(-1,t,"􀇑");
      }
      else if(k.KFCM(4,t,['n','i','j','u'])){
        r=m=1;   // Line 448
        k.KDC(4,t);
        k.KO(-1,t,"􀇒");
      }
      else if(k.KFCM(4,t,['n','i','k','u'])){
        r=m=1;   // Line 449
        k.KDC(4,t);
        k.KO(-1,t,"􀇓");
      }
      else if(k.KFCM(4,t,['n','i','l','e'])){
        r=m=1;   // Line 450
        k.KDC(4,t);
        k.KO(-1,t,"􀇔");
      }
      else if(k.KFCM(4,t,['n','i','w','a'])){
        r=m=1;   // Line 452
        k.KDC(4,t);
        k.KO(-1,t,"􀇖");
      }
      else if(k.KFCM(4,t,['n','u','l','a'])){
        r=m=1;   // Line 455
        k.KDC(4,t);
        k.KO(-1,t,"􀇙");
      }
      else if(k.KFCM(4,t,['o','n','i','n'])){
        r=m=1;   // Line 460
        k.KDC(4,t);
        k.KO(-1,t,"􀇞");
      }
      else if(k.KFCM(4,t,['o','n','k','o'])){
        r=m=1;   // Line 462
        k.KDC(4,t);
        k.KO(-1,t,"􀇟");
      }
      else if(k.KFCM(4,t,['p','a','n','i'])){
        r=m=1;   // Line 473
        k.KDC(4,t);
        k.KO(-1,t,"􀇪");
      }
      else if(k.KFCM(4,t,['p','a','s','u'])){
        r=m=1;   // Line 480
        k.KDC(4,t);
        k.KO(-1,t,"􀇱");
      }
      else if(k.KFCM(4,t,['p','a','t','a'])){
        r=m=1;   // Line 481
        k.KDC(4,t);
        k.KO(-1,t,"􀇲");
      }
      else if(k.KFCM(4,t,['p','a','w','o'])){
        r=m=1;   // Line 483
        k.KDC(4,t);
        k.KO(-1,t,"􀇴");
      }
      else if(k.KFCM(4,t,['p','e','k','o'])){
        r=m=1;   // Line 484
        k.KDC(4,t);
        k.KO(-1,t,"􀇵");
      }
      else if(k.KFCM(4,t,['p','e','l','a'])){
        r=m=1;   // Line 485
        k.KDC(4,t);
        k.KO(-1,t,"􀇶");
      }
      else if(k.KFCM(4,t,['p','e','s','e'])){
        r=m=1;   // Line 490
        k.KDC(4,t);
        k.KO(-1,t,"􀇼");
      }
      else if(k.KFCM(4,t,['p','i','c','e'])){
        r=m=1;   // Line 493
        k.KDC(4,t);
        k.KO(-1,t,"􀇿");
      }
      else if(k.KFCM(4,t,['p','i','l','u'])){
        r=m=1;   // Line 496
        k.KDC(4,t);
        k.KO(-1,t,"􀈂");
      }
      else if(k.KFCM(4,t,['p','o','s','a'])){
        r=m=1;   // Line 505
        k.KDC(4,t);
        k.KO(-1,t,"􀈌");
      }
      else if(k.KFCM(4,t,['p','u','k','a'])){
        r=m=1;   // Line 509
        k.KDC(4,t);
        k.KO(-1,t,"􀈎");
      }
      else if(k.KFCM(4,t,['p','u','l','a'])){
        r=m=1;   // Line 510
        k.KDC(4,t);
        k.KO(-1,t,"􀈐");
      }
      else if(k.KFCM(4,t,['p','u','m','i'])){
        r=m=1;   // Line 511
        k.KDC(4,t);
        k.KO(-1,t,"􀈑");
      }
      else if(k.KFCM(4,t,['s','a','l','a'])){
        r=m=1;   // Line 514
        k.KDC(4,t);
        k.KO(-1,t,"􀈔");
      }
      else if(k.KFCM(4,t,['s','a','m','o'])){
        r=m=1;   // Line 518
        k.KDC(4,t);
        k.KO(-1,t,"􀈙");
      }
      else if(k.KFCM(4,t,['s','a','p','i'])){
        r=m=1;   // Line 521
        k.KDC(4,t);
        k.KO(-1,t,"􀈜");
      }
      else if(k.KFCM(4,t,['s','a','t','u'])){
        r=m=1;   // Line 525
        k.KDC(4,t);
        k.KO(-1,t,"􀈠");
      }
      else if(k.KFCM(4,t,['s','e','m','a'])){
        r=m=1;   // Line 528
        k.KDC(4,t);
        k.KO(-1,t,"􀈣");
      }
      else if(k.KFCM(4,t,['s','e','p','o'])){
        r=m=1;   // Line 529
        k.KDC(4,t);
        k.KO(-1,t,"􀌗");
      }
      else if(k.KFCM(4,t,['s','i','l','a'])){
        r=m=1;   // Line 533
        k.KDC(4,t);
        k.KO(-1,t,"􀈨");
      }
      else if(k.KFCM(4,t,['s','i','p','a'])){
        r=m=1;   // Line 538
        k.KDC(4,t);
        k.KO(-1,t,"􀈬");
      }
      else if(k.KFCM(4,t,['s','i','t','o'])){
        r=m=1;   // Line 540
        k.KDC(4,t);
        k.KO(-1,t,"􀈮");
      }
      else if(k.KFCM(4,t,['s','o','l','u'])){
        r=m=1;   // Line 542
        k.KDC(4,t);
        k.KO(-1,t,"􀈰");
      }
      else if(k.KFCM(4,t,['s','o','n','e'])){
        r=m=1;   // Line 543
        k.KDC(4,t);
        k.KO(-1,t,"􀈱");
      }
      else if(k.KFCM(4,t,['s','o','p','a'])){
        r=m=1;   // Line 544
        k.KDC(4,t);
        k.KO(-1,t,"􀈲");
      }
      else if(k.KFCM(4,t,['s','o','t','o'])){
        r=m=1;   // Line 545
        k.KDC(4,t);
        k.KO(-1,t,"􀈳");
      }
      else if(k.KFCM(4,t,['s','u','k','i'])){
        r=m=1;   // Line 546
        k.KDC(4,t);
        k.KO(-1,t,"􀈴");
      }
      else if(k.KFCM(4,t,['s','u','l','a'])){
        r=m=1;   // Line 547
        k.KDC(4,t);
        k.KO(-1,t,"􀈵");
      }
      else if(k.KFCM(4,t,['t','a','t','i'])){
        r=m=1;   // Line 566
        k.KDC(4,t);
        k.KO(-1,t,"􀉈");
      }
      else if(k.KFCM(4,t,['t','a','w','e'])){
        r=m=1;   // Line 568
        k.KDC(4,t);
        k.KO(-1,t,"􀉉");
      }
      else if(k.KFCM(4,t,['t','e','k','a'])){
        r=m=1;   // Line 570
        k.KDC(4,t);
        k.KO(-1,t,"􀉌");
      }
      else if(k.KFCM(4,t,['t','e','n','e'])){
        r=m=1;   // Line 572
        k.KDC(4,t);
        k.KO(-1,t,"􀉎");
      }
      else if(k.KFCM(4,t,['t','e','p','u'])){
        r=m=1;   // Line 575
        k.KDC(4,t);
        k.KO(-1,t,"􀉑");
      }
      if(m) {}
      else if(k.KFCM(4,t,['t','i','j','u'])){
        r=m=1;   // Line 577
        k.KDC(4,t);
        k.KO(-1,t,"􀉓");
      }
      else if(k.KFCM(4,t,['t','i','k','u'])){
        r=m=1;   // Line 578
        k.KDC(4,t);
        k.KO(-1,t,"􀉔");
      }
      else if(k.KFCM(4,t,['t','i','l','e'])){
        r=m=1;   // Line 579
        k.KDC(4,t);
        k.KO(-1,t,"􀉕");
      }
      else if(k.KFCM(4,t,['t','i','p','a'])){
        r=m=1;   // Line 581
        k.KDC(4,t);
        k.KO(-1,t,"􀉳");
      }
      else if(k.KFCM(4,t,['t','i','t','i'])){
        r=m=1;   // Line 583
        k.KDC(4,t);
        k.KO(-1,t,"􀉙");
      }
      else if(k.KFCM(4,t,['t','o','l','u'])){
        r=m=1;   // Line 585
        k.KDC(4,t);
        k.KO(-1,t,"􀉭");
      }
      else if(k.KFCM(4,t,['t','o','p','e'])){
        r=m=1;   // Line 587
        k.KDC(4,t);
        k.KO(-1,t,"􀉝");
      }
      else if(k.KFCM(4,t,['t','u','k','o'])){
        r=m=1;   // Line 589
        k.KDC(4,t);
        k.KO(-1,t,"􀉟");
      }
      else if(k.KFCM(4,t,['t','u','l','a'])){
        r=m=1;   // Line 590
        k.KDC(4,t);
        k.KO(-1,t,"􀉠");
      }
      else if(k.KFCM(4,t,['t','u','s','a'])){
        r=m=1;   // Line 592
        k.KDC(4,t);
        k.KO(-1,t,"􀉢");
      }
      else if(k.KFCM(4,t,['u','s','e','n'])){
        r=m=1;   // Line 603
        k.KDC(4,t);
        k.KO(-1,t,"􀌀");
      }
      else if(k.KFCM(4,t,['w','a','l','a'])){
        r=m=1;   // Line 606
        k.KDC(4,t);
        k.KO(-1,t,"􀉩");
      }
      else if(k.KFCM(4,t,['w','a','j','u'])){
        r=m=1;   // Line 611
        k.KDC(4,t);
        k.KO(-1,t,"􀉱");
      }
      else if(k.KFCM(4,t,['w','i','j','a'])){
        r=m=1;   // Line 614
        k.KDC(4,t);
        k.KO(-1,t,"􀉸");
      }
      else if(k.KFCM(4,t,['w','i','k','i'])){
        r=m=1;   // Line 615
        k.KDC(4,t);
        k.KO(-1,t,"􀉹");
      }
      else if(k.KFCM(3,t,['a','l','u'])){
        r=m=1;   // Line 238
        k.KDC(3,t);
        k.KO(-1,t,"􀄃");
      }
      else if(k.KFCM(3,t,['a','m','o'])){
        r=m=1;   // Line 239
        k.KDC(3,t);
        k.KO(-1,t,"􀄄");
      }
      else if(k.KFCM(3,t,['a','n','i'])){
        r=m=1;   // Line 241
        k.KDC(3,t);
        k.KO(-1,t,"􀄆");
      }
      else if(k.KFCM(3,t,['a','s','a'])){
        r=m=1;   // Line 247
        k.KDC(3,t);
        k.KO(-1,t,"􀄌");
      }
      else if(k.KFCM(3,t,['c','o','n'])){
        r=m=1;   // Line 261
        k.KDC(3,t);
        k.KO(-1,t,"􀄚");
      }
      else if(k.KFCM(3,t,['e','m','e'])){
        r=m=1;   // Line 268
        k.KDC(3,t);
        k.KO(-1,t,"􀄡");
      }
      else if(k.KFCM(3,t,['h','a','n'])){
        r=m=1;   // Line 275
        k.KDC(3,t);
        k.KO(-1,t,"􀄪");
      }
      else if(k.KFCM(3,t,['h','e','n'])){
        r=m=1;   // Line 280
        k.KDC(3,t);
        k.KO(-1,t,"􀄯");
      }
      else if(k.KFCM(3,t,['h','o','n'])){
        r=m=1;   // Line 283
        k.KDC(3,t);
        k.KO(-1,t,"􀄲");
      }
      else if(k.KFCM(3,t,['i','l','i'])){
        r=m=1;   // Line 295
        k.KDC(3,t);
        k.KO(-1,t,"􀄾");
      }
      else if(k.KFCM(3,t,['i','w','e'])){
        r=m=1;   // Line 306
        k.KDC(3,t);
        k.KO(-1,t,"􀅆");
      }
      else if(k.KFCM(3,t,['j','a','n'])){
        r=m=1;   // Line 309
        k.KDC(3,t);
        k.KO(-1,t,"􀅉");
      }
      else if(k.KFCM(3,t,['j','o','n'])){
        r=m=1;   // Line 315
        k.KDC(3,t);
        k.KO(-1,t,"􀅏");
      }
      else if(k.KFCM(3,t,['k','a','n'])){
        r=m=1;   // Line 325
        k.KDC(3,t);
        k.KO(-1,t,"􀅘");
      }
      else if(k.KFCM(3,t,['k','i','n'])){
        r=m=1;   // Line 343
        k.KDC(3,t);
        k.KO(-1,t,"􀅪");
      }
      else if(k.KFCM(3,t,['k','u','n'])){
        r=m=1;   // Line 363
        k.KDC(3,t);
        k.KO(-1,t,"􀅾");
      }
      else if(k.KFCM(3,t,['l','a','n'])){
        r=m=1;   // Line 375
        k.KDC(3,t);
        k.KO(-1,t,"􀆉");
      }
      else if(k.KFCM(3,t,['l','e','n'])){
        r=m=1;   // Line 381
        k.KDC(3,t);
        k.KO(-1,t,"􀆏");
      }
      else if(k.KFCM(3,t,['l','u','n'])){
        r=m=1;   // Line 397
        k.KDC(3,t);
        k.KO(-1,t,"􀆠");
      }
      else if(k.KFCM(3,t,['m','e','n'])){
        r=m=1;   // Line 412
        k.KDC(3,t);
        k.KO(-1,t,"􀆯");
      }
      else if(k.KFCM(3,t,['n','a','n'])){
        r=m=1;   // Line 437
        k.KDC(3,t);
        k.KO(-1,t,"􀇇");
      }
      else if(k.KFCM(3,t,['n','i','n'])){
        r=m=1;   // Line 451
        k.KDC(3,t);
        k.KO(-1,t,"􀇕");
      }
      else if(k.KFCM(3,t,['n','o','n'])){
        r=m=1;   // Line 454
        k.KDC(3,t);
        k.KO(-1,t,"􀇘");
      }
      else if(k.KFCM(3,t,['o','k','e'])){
        r=m=1;   // Line 458
        k.KDC(3,t);
        k.KO(-1,t,"􀇜");
      }
      else if(k.KFCM(3,t,['o','s','a'])){
        r=m=1;   // Line 466
        k.KDC(3,t);
        k.KO(-1,t,"􀇣");
      }
      else if(k.KFCM(3,t,['o','t','i'])){
        r=m=1;   // Line 469
        k.KDC(3,t);
        k.KO(-1,t,"􀇦");
      }
      else if(k.KFCM(3,t,['p','a','n'])){
        r=m=1;   // Line 472
        k.KDC(3,t);
        k.KO(-1,t,"􀇩");
      }
      else if(k.KFCM(3,t,['p','e','n'])){
        r=m=1;   // Line 488
        k.KDC(3,t);
        k.KO(-1,t,"􀇹");
      }
      else if(k.KFCM(3,t,['p','o','n'])){
        r=m=1;   // Line 503
        k.KDC(3,t);
        k.KO(-1,t,"􀈊");
      }
      else if(k.KFCM(3,t,['s','i','n'])){
        r=m=1;   // Line 534
        k.KDC(3,t);
        k.KO(-1,t,"􀈩");
      }
      else if(k.KFCM(3,t,['s','u','n'])){
        r=m=1;   // Line 548
        k.KDC(3,t);
        k.KO(-1,t,"􀈶");
      }
      else if(k.KFCM(3,t,['t','a','n'])){
        r=m=1;   // Line 562
        k.KDC(3,t);
        k.KO(-1,t,"􀉄");
      }
      else if(k.KFCM(3,t,['t','e','n'])){
        r=m=1;   // Line 571
        k.KDC(3,t);
        k.KO(-1,t,"􀉍");
      }
      else if(k.KFCM(3,t,['t','u','n'])){
        r=m=1;   // Line 591
        k.KDC(3,t);
        k.KO(-1,t,"􀉡");
      }
      else if(k.KFCM(3,t,['u','l','i'])){
        r=m=1;   // Line 597
        k.KDC(3,t);
        k.KO(-1,t,"􀉚");
      }
      else if(k.KFCM(3,t,['u','m','o'])){
        r=m=1;   // Line 600
        k.KDC(3,t);
        k.KO(-1,t,"􀉧");
      }
      else if(k.KFCM(3,t,['u','t','a'])){
        r=m=1;   // Line 605
        k.KDC(3,t);
        k.KO(-1,t,"􀉯");
      }
      else if(k.KFCM(3,t,['w','e','n'])){
        r=m=1;   // Line 612
        k.KDC(3,t);
        k.KO(-1,t,"􀉶");
      }
      else if(k.KFCM(2,t,['c','i'])){
        r=m=1;   // Line 257
        k.KDC(2,t);
        k.KO(-1,t,"􀄖");
      }
      else if(k.KFCM(2,t,['h','e'])){
        r=m=1;   // Line 278
        k.KDC(2,t);
        k.KO(-1,t,"􀄭");
      }
      else if(k.KFCM(2,t,['h','u'])){
        r=m=1;   // Line 286
        k.KDC(2,t);
        k.KO(-1,t,"􀄵");
      }
      else if(k.KFCM(2,t,['i','n'])){
        r=m=1;   // Line 297
        k.KDC(2,t);
        k.KO(-1,t,"􀅀");
      }
      else if(k.KFCM(2,t,['j','a'])){
        r=m=1;   // Line 307
        k.KDC(2,t);
        k.KO(-1,t,"􀅇");
      }
      else if(k.KFCM(2,t,['j','e'])){
        r=m=1;   // Line 313
        k.KDC(2,t);
        k.KO(-1,t,"􀅍");
      }
      else if(k.KFCM(2,t,['j','u'])){
        r=m=1;   // Line 317
        k.KDC(2,t);
        k.KO(-1,t,"􀅑");
      }
      else if(k.KFCM(2,t,['k','a'])){
        r=m=1;   // Line 320
        k.KDC(2,t);
        k.KO(-1,t,"􀅓");
      }
      else if(k.KFCM(2,t,['k','i'])){
        r=m=1;   // Line 336
        k.KDC(2,t);
        k.KO(-1,t,"􀅣");
      }
      else if(k.KFCM(2,t,['k','o'])){
        r=m=1;   // Line 346
        k.KDC(2,t);
        k.KO(-1,t,"􀅭");
      }
      else if(k.KFCM(2,t,['l','a'])){
        r=m=1;   // Line 370
        k.KDC(2,t);
        k.KO(-1,t,"􀆄");
      }
      else if(k.KFCM(2,t,['l','e'])){
        r=m=1;   // Line 379
        k.KDC(2,t);
        k.KO(-1,t,"􀆍");
      }
      else if(k.KFCM(2,t,['l','o'])){
        r=m=1;   // Line 393
        k.KDC(2,t);
        k.KO(-1,t,"􀆜");
      }
      else if(k.KFCM(2,t,['m','i'])){
        r=m=1;   // Line 417
        k.KDC(2,t);
        k.KO(-1,t,"􀆴");
      }
      else if(k.KFCM(2,t,['m','u'])){
        r=m=1;   // Line 423
        k.KDC(2,t);
        k.KO(-1,t,"􀆺");
      }
      else if(k.KFCM(2,t,['n','a'])){
        r=m=1;   // Line 430
        k.KDC(2,t);
        k.KO(-1,t,"􀇁");
      }
      else if(k.KFCM(2,t,['n','e'])){
        r=m=1;   // Line 442
        k.KDC(2,t);
        k.KO(-1,t,"􀇌");
      }
      else if(k.KFCM(2,t,['n','o'])){
        r=m=1;   // Line 453
        k.KDC(2,t);
        k.KO(-1,t,"􀇗");
      }
      else if(k.KFCM(2,t,['p','a'])){
        r=m=1;   // Line 470
        k.KDC(2,t);
        k.KO(-1,t,"􀇧");
      }
      else if(k.KFCM(2,t,['p','i'])){
        r=m=1;   // Line 492
        k.KDC(2,t);
        k.KO(-1,t,"􀇾");
      }
      else if(k.KFCM(2,t,['p','o'])){
        r=m=1;   // Line 500
        k.KDC(2,t);
        k.KO(-1,t,"􀈇");
      }
      else if(k.KFCM(2,t,['s','a'])){
        r=m=1;   // Line 513
        k.KDC(2,t);
        k.KO(-1,t,"􀈒");
      }
      else if(k.KFCM(2,t,['s','e'])){
        r=m=1;   // Line 526
        k.KDC(2,t);
        k.KO(-1,t,"􀈡");
      }
      else if(k.KFCM(2,t,['s','o'])){
        r=m=1;   // Line 541
        k.KDC(2,t);
        k.KO(-1,t,"􀈯");
      }
      else if(k.KFCM(2,t,['t','a'])){
        r=m=1;   // Line 552
        k.KDC(2,t);
        k.KO(-1,t,"􀈺");
      }
      else if(k.KFCM(2,t,['t','e'])){
        r=m=1;   // Line 569
        k.KDC(2,t);
        k.KO(-1,t,"􀉋");
      }
      else if(k.KFCM(2,t,['t','u'])){
        r=m=1;   // Line 588
        k.KDC(2,t);
        k.KO(-1,t,"􀉞");
      }
      else if(k.KFCM(2,t,['u','n'])){
        r=m=1;   // Line 601
        k.KDC(2,t);
        k.KO(-1,t,"􀉬");
      }
      else if(k.KFCM(2,t,['w','a'])){
        r=m=1;   // Line 610
        k.KDC(2,t);
        k.KO(-1,t,"􀉰");
      }
      else if(k.KFCM(2,t,['w','i'])){
        r=m=1;   // Line 613
        k.KDC(2,t);
        k.KO(-1,t,"􀉷");
      }
      else if(k.KFCM(1,t,['o'])){
        r=m=1;   // Line 456
        k.KDC(1,t);
        k.KO(-1,t,"􀇚");
      }
      else if(k.KFCM(1,t,['0'])){
        r=m=1;   // Line 619
        k.KDC(1,t);
        k.KO(-1,t,"􀊩");
      }
      else if(k.KFCM(1,t,['1'])){
        r=m=1;   // Line 620
        k.KDC(1,t);
        k.KO(-1,t,"􀊪");
      }
      else if(k.KFCM(1,t,['2'])){
        r=m=1;   // Line 621
        k.KDC(1,t);
        k.KO(-1,t,"􀊫");
      }
      else if(k.KFCM(1,t,['3'])){
        r=m=1;   // Line 622
        k.KDC(1,t);
        k.KO(-1,t,"􀊬");
      }
      else if(k.KFCM(1,t,['4'])){
        r=m=1;   // Line 623
        k.KDC(1,t);
        k.KO(-1,t,"􀊭");
      }
      else if(k.KFCM(1,t,['5'])){
        r=m=1;   // Line 624
        k.KDC(1,t);
        k.KO(-1,t,"􀊮");
      }
      else if(k.KFCM(1,t,['6'])){
        r=m=1;   // Line 625
        k.KDC(1,t);
        k.KO(-1,t,"􀊯");
      }
      else if(k.KFCM(1,t,['7'])){
        r=m=1;   // Line 626
        k.KDC(1,t);
        k.KO(-1,t,"􀊰");
      }
      else if(k.KFCM(1,t,['8'])){
        r=m=1;   // Line 627
        k.KDC(1,t);
        k.KO(-1,t,"􀊱");
      }
      else if(k.KFCM(1,t,['9'])){
        r=m=1;   // Line 628
        k.KDC(1,t);
        k.KO(-1,t,"􀊲");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_TAB /* 0x09 */)) {
      if(k.KFCM(8,t,['k','o','n','k','u','l','e','n'])){
        r=m=1;   // Line 351
        k.KDC(8,t);
        k.KO(-1,t,"􀅲");
      }
      else if(k.KFCM(8,t,['k','u','w','e','k','a','n','2'])){
        r=m=1;   // Line 368
        k.KDC(8,t);
        k.KO(-1,t,"􀌎");
      }
      else if(k.KFCM(8,t,['s','i','n','c','u','w','a','n'])){
        r=m=1;   // Line 535
        k.KDC(8,t);
        k.KO(-1,t,"􀈪");
      }
      else if(k.KFCM(7,t,['e','n','t','e','k','e','n'])){
        r=m=1;   // Line 269
        k.KDC(7,t);
        k.KO(-1,t,"􀄢");
      }
      else if(k.KFCM(7,t,['h','u','w','o','n','h','o'])){
        r=m=1;   // Line 291
        k.KDC(7,t);
        k.KO(-1,t,"􀄺");
      }
      else if(k.KFCM(7,t,['i','n','k','a','t','a','n'])){
        r=m=1;   // Line 299
        k.KDC(7,t);
        k.KO(-1,t,"􀅂");
      }
      else if(k.KFCM(7,t,['i','n','p','a','l','i','2'])){
        r=m=1;   // Line 301
        k.KDC(7,t);
        k.KO(-1,t,"􀌓");
      }
      else if(k.KFCM(7,t,['i','p','i','n','t','o','2'])){
        r=m=1;   // Line 304
        k.KDC(7,t);
        k.KO(-1,t,"􀌌");
      }
      else if(k.KFCM(7,t,['k','o','n','p','u','t','e'])){
        r=m=1;   // Line 353
        k.KDC(7,t);
        k.KO(-1,t,"􀅴");
      }
      else if(k.KFCM(7,t,['k','o','n','t','a','t','u'])){
        r=m=1;   // Line 354
        k.KDC(7,t);
        k.KO(-1,t,"􀅵");
      }
      else if(k.KFCM(7,t,['k','u','w','e','k','a','n'])){
        r=m=1;   // Line 367
        k.KDC(7,t);
        k.KO(-1,t,"􀆂");
      }
      else if(k.KFCM(7,t,['l','i','m','i','j','e','n'])){
        r=m=1;   // Line 389
        k.KDC(7,t);
        k.KO(-1,t,"􀆗");
      }
      else if(k.KFCM(7,t,['m','u','t','a','k','i','n'])){
        r=m=1;   // Line 428
        k.KDC(7,t);
        k.KO(-1,t,"􀆿");
      }
      else if(k.KFCM(7,t,['n','a','l','i','n','c','a'])){
        r=m=1;   // Line 434
        k.KDC(7,t);
        k.KO(-1,t,"􀇄");
      }
      else if(k.KFCM(7,t,['p','a','n','k','o','s','i'])){
        r=m=1;   // Line 474
        k.KDC(7,t);
        k.KO(-1,t,"􀇫");
      }
      else if(k.KFCM(7,t,['p','e','s','u','w','a','n'])){
        r=m=1;   // Line 491
        k.KDC(7,t);
        k.KO(-1,t,"􀇽");
      }
      else if(k.KFCM(7,t,['p','i','k','a','n','t','e'])){
        r=m=1;   // Line 497
        k.KDC(7,t);
        k.KO(-1,t,"􀈃");
      }
      else if(k.KFCM(7,t,['p','o','w','e','l','e','2'])){
        r=m=1;   // Line 507
        k.KDC(7,t);
        k.KO(-1,t,"􀌘");
      }
      else if(k.KFCM(7,t,['s','a','m','i','n','t','a'])){
        r=m=1;   // Line 517
        k.KDC(7,t);
        k.KO(-1,t,"􀈗");
      }
      else if(k.KFCM(7,t,['s','a','t','a','l','a','n'])){
        r=m=1;   // Line 523
        k.KDC(7,t);
        k.KO(-1,t,"􀈞");
      }
      else if(k.KFCM(7,t,['s','i','n','s','a','s','u'])){
        r=m=1;   // Line 536
        k.KDC(7,t);
        k.KO(-1,t,"􀉺");
      }
      else if(k.KFCM(7,t,['t','i','j','a','n','t','e'])){
        r=m=1;   // Line 576
        k.KDC(7,t);
        k.KO(-1,t,"􀉒");
      }
      else if(k.KFCM(6,t,['a','n','k','o','l','o'])){
        r=m=1;   // Line 242
        k.KDC(6,t);
        k.KO(-1,t,"􀄇");
      }
      else if(k.KFCM(6,t,['a','n','p','i','p','i'])){
        r=m=1;   // Line 243
        k.KDC(6,t);
        k.KO(-1,t,"􀄈");
      }
      else if(k.KFCM(6,t,['a','n','t','o','m','i'])){
        r=m=1;   // Line 244
        k.KDC(6,t);
        k.KO(-1,t,"􀄉");
      }
      else if(k.KFCM(6,t,['a','n','w','i','j','e'])){
        r=m=1;   // Line 245
        k.KDC(6,t);
        k.KO(-1,t,"􀄊");
      }
      else if(k.KFCM(6,t,['c','a','k','u','w','a'])){
        r=m=1;   // Line 249
        k.KDC(6,t);
        k.KO(-1,t,"􀄎");
      }
      else if(k.KFCM(6,t,['c','a','w','a','p','u'])){
        r=m=1;   // Line 252
        k.KDC(6,t);
        k.KO(-1,t,"􀄑");
      }
      else if(k.KFCM(6,t,['h','a','k','i','k','i'])){
        r=m=1;   // Line 272
        k.KDC(6,t);
        k.KO(-1,t,"􀄧");
      }
      else if(k.KFCM(6,t,['h','a','k','o','l','i'])){
        r=m=1;   // Line 273
        k.KDC(6,t);
        k.KO(-1,t,"􀄨");
      }
      else if(k.KFCM(6,t,['h','a','l','u','k','o'])){
        r=m=1;   // Line 274
        k.KDC(6,t);
        k.KO(-1,t,"􀄩");
      }
      else if(k.KFCM(6,t,['h','a','p','i','j','o'])){
        r=m=1;   // Line 276
        k.KDC(6,t);
        k.KO(-1,t,"􀄫");
      }
      else if(k.KFCM(6,t,['h','e','n','e','l','o'])){
        r=m=1;   // Line 281
        k.KDC(6,t);
        k.KO(-1,t,"􀄰");
      }
      else if(k.KFCM(6,t,['h','i','n','p','a','n'])){
        r=m=1;   // Line 282
        k.KDC(6,t);
        k.KO(-1,t,"􀄱");
      }
      else if(k.KFCM(6,t,['i','n','p','a','l','i'])){
        r=m=1;   // Line 300
        k.KDC(6,t);
        k.KO(-1,t,"􀉫");
      }
      else if(k.KFCM(6,t,['i','p','i','n','t','o'])){
        r=m=1;   // Line 303
        k.KDC(6,t);
        k.KO(-1,t,"􀅄");
      }
      else if(k.KFCM(6,t,['k','a','l','a','w','a'])){
        r=m=1;   // Line 323
        k.KDC(6,t);
        k.KO(-1,t,"􀅖");
      }
      else if(k.KFCM(6,t,['k','a','n','i','s','a'])){
        r=m=1;   // Line 326
        k.KDC(6,t);
        k.KO(-1,t,"􀅙");
      }
      else if(k.KFCM(6,t,['k','e','m','i','k','a'])){
        r=m=1;   // Line 334
        k.KDC(6,t);
        k.KO(-1,t,"􀅡");
      }
      else if(k.KFCM(6,t,['k','i','j','e','t','a'])){
        r=m=1;   // Line 337
        k.KDC(6,t);
        k.KO(-1,t,"􀅤");
      }
      else if(k.KFCM(6,t,['k','i','k','u','w','a'])){
        r=m=1;   // Line 340
        k.KDC(6,t);
        k.KO(-1,t,"􀅨");
      }
      else if(k.KFCM(6,t,['k','i','k','o','l','o'])){
        r=m=1;   // Line 341
        k.KDC(6,t);
        k.KO(-1,t,"􀅧");
      }
      else if(k.KFCM(6,t,['k','i','l','i','m','a'])){
        r=m=1;   // Line 342
        k.KDC(6,t);
        k.KO(-1,t,"􀅩");
      }
      else if(k.KFCM(6,t,['k','i','s','o','w','a'])){
        r=m=1;   // Line 345
        k.KDC(6,t);
        k.KO(-1,t,"􀅬");
      }
      else if(k.KFCM(6,t,['k','o','s','o','m','o'])){
        r=m=1;   // Line 356
        k.KDC(6,t);
        k.KO(-1,t,"􀅷");
      }
      else if(k.KFCM(6,t,['k','u','w','o','s','i'])){
        r=m=1;   // Line 369
        k.KDC(6,t);
        k.KO(-1,t,"􀆃");
      }
      else if(k.KFCM(6,t,['l','a','c','i','t','o'])){
        r=m=1;   // Line 371
        k.KDC(6,t);
        k.KO(-1,t,"􀆅");
      }
      else if(k.KFCM(6,t,['l','a','n','t','a','n'])){
        r=m=1;   // Line 378
        k.KDC(6,t);
        k.KO(-1,t,"􀆌");
      }
      else if(k.KFCM(6,t,['l','e','s','e','k','a'])){
        r=m=1;   // Line 383
        k.KDC(6,t);
        k.KO(-1,t,"􀆑");
      }
      else if(k.KFCM(6,t,['l','i','j','u','l','e'])){
        r=m=1;   // Line 385
        k.KDC(6,t);
        k.KO(-1,t,"􀆓");
      }
      else if(k.KFCM(6,t,['m','a','c','i','k','o'])){
        r=m=1;   // Line 400
        k.KDC(6,t);
        k.KO(-1,t,"􀆣");
      }
      else if(k.KFCM(6,t,['m','a','m','a','k','i'])){
        r=m=1;   // Line 405
        k.KDC(6,t);
        k.KO(-1,t,"􀆨");
      }
      else if(k.KFCM(6,t,['m','a','t','i','j','a'])){
        r=m=1;   // Line 407
        k.KDC(6,t);
        k.KO(-1,t,"􀆪");
      }
      else if(k.KFCM(6,t,['m','a','t','u','w','a'])){
        r=m=1;   // Line 409
        k.KDC(6,t);
        k.KO(-1,t,"􀆬");
      }
      else if(k.KFCM(6,t,['m','i','j','a','l','o'])){
        r=m=1;   // Line 419
        k.KDC(6,t);
        k.KO(-1,t,"􀆶");
      }
      else if(k.KFCM(6,t,['m','u','w','e','s','i'])){
        r=m=1;   // Line 429
        k.KDC(6,t);
        k.KO(-1,t,"􀇀");
      }
      else if(k.KFCM(6,t,['n','a','m','u','n','a'])){
        r=m=1;   // Line 436
        k.KDC(6,t);
        k.KO(-1,t,"􀇆");
      }
      else if(k.KFCM(6,t,['n','a','n','k','i','n'])){
        r=m=1;   // Line 438
        k.KDC(6,t);
        k.KO(-1,t,"􀇈");
      }
      else if(k.KFCM(6,t,['p','a','n','s','i','n'])){
        r=m=1;   // Line 476
        k.KDC(6,t);
        k.KO(-1,t,"􀇭");
      }
      else if(k.KFCM(6,t,['p','e','l','e','t','e'])){
        r=m=1;   // Line 486
        k.KDC(6,t);
        k.KO(-1,t,"􀇷");
      }
      else if(k.KFCM(6,t,['p','i','c','i','j','o'])){
        r=m=1;   // Line 495
        k.KDC(6,t);
        k.KO(-1,t,"􀈁");
      }
      else if(k.KFCM(6,t,['p','o','l','o','k','o'])){
        r=m=1;   // Line 502
        k.KDC(6,t);
        k.KO(-1,t,"􀈉");
      }
      else if(k.KFCM(6,t,['p','o','l','o','t','a'])){
        r=m=1;   // Line 504
        k.KDC(6,t);
        k.KO(-1,t,"􀈋");
      }
      else if(k.KFCM(6,t,['p','o','w','e','l','e'])){
        r=m=1;   // Line 506
        k.KDC(6,t);
        k.KO(-1,t,"􀉾");
      }
      else if(k.KFCM(6,t,['p','u','l','u','s','i'])){
        r=m=1;   // Line 512
        k.KDC(6,t);
        k.KO(-1,t,"􀈓");
      }
      else if(k.KFCM(6,t,['s','a','l','i','l','a'])){
        r=m=1;   // Line 515
        k.KDC(6,t);
        k.KO(-1,t,"􀈕");
      }
      else if(k.KFCM(6,t,['s','a','n','k','a','n'])){
        r=m=1;   // Line 519
        k.KDC(6,t);
        k.KO(-1,t,"􀈚");
      }
      else if(k.KFCM(6,t,['s','a','p','o','l','e'])){
        r=m=1;   // Line 522
        k.KDC(6,t);
        k.KO(-1,t,"􀈝");
      }
      else if(k.KFCM(6,t,['s','a','t','i','l','u'])){
        r=m=1;   // Line 524
        k.KDC(6,t);
        k.KO(-1,t,"􀈟");
      }
      else if(k.KFCM(6,t,['s','e','k','a','n','u'])){
        r=m=1;   // Line 527
        k.KDC(6,t);
        k.KO(-1,t,"􀈢");
      }
      else if(k.KFCM(6,t,['s','i','t','i','j','a'])){
        r=m=1;   // Line 539
        k.KDC(6,t);
        k.KO(-1,t,"􀈭");
      }
      else if(k.KFCM(6,t,['s','u','n','a','j','a'])){
        r=m=1;   // Line 549
        k.KDC(6,t);
        k.KO(-1,t,"􀈷");
      }
      else if(k.KFCM(6,t,['s','u','n','k','a','n'])){
        r=m=1;   // Line 550
        k.KDC(6,t);
        k.KO(-1,t,"􀈸");
      }
      else if(k.KFCM(6,t,['s','u','w','i','n','a'])){
        r=m=1;   // Line 551
        k.KDC(6,t);
        k.KO(-1,t,"􀈹");
      }
      else if(k.KFCM(6,t,['t','a','j','a','l','i'])){
        r=m=1;   // Line 553
        k.KDC(6,t);
        k.KO(-1,t,"􀈻");
      }
      else if(k.KFCM(6,t,['t','a','k','a','h','a'])){
        r=m=1;   // Line 555
        k.KDC(6,t);
        k.KO(-1,t,"􀈽");
      }
      else if(k.KFCM(6,t,['t','a','k','i','l','o'])){
        r=m=1;   // Line 556
        k.KDC(6,t);
        k.KO(-1,t,"􀈾");
      }
      else if(k.KFCM(6,t,['t','a','l','i','k','a'])){
        r=m=1;   // Line 557
        k.KDC(6,t);
        k.KO(-1,t,"􀈿");
      }
      else if(k.KFCM(6,t,['t','a','l','i','l','i'])){
        r=m=1;   // Line 558
        k.KDC(6,t);
        k.KO(-1,t,"􀉀");
      }
      else if(k.KFCM(6,t,['t','a','m','a','k','a'])){
        r=m=1;   // Line 560
        k.KDC(6,t);
        k.KO(-1,t,"􀉂");
      }
      else if(k.KFCM(6,t,['t','a','p','a','l','a'])){
        r=m=1;   // Line 563
        k.KDC(6,t);
        k.KO(-1,t,"􀉅");
      }
      else if(k.KFCM(6,t,['t','a','s','u','w','i'])){
        r=m=1;   // Line 565
        k.KDC(6,t);
        k.KO(-1,t,"􀉇");
      }
      else if(k.KFCM(6,t,['t','a','w','a','w','a'])){
        r=m=1;   // Line 567
        k.KDC(6,t);
        k.KO(-1,t,"􀉽");
      }
      else if(k.KFCM(6,t,['t','e','n','e','m','e'])){
        r=m=1;   // Line 573
        k.KDC(6,t);
        k.KO(-1,t,"􀉏");
      }
      else if(k.KFCM(6,t,['t','o','m','i','w','a'])){
        r=m=1;   // Line 584
        k.KDC(6,t);
        k.KO(-1,t,"􀉛");
      }
      else if(k.KFCM(6,t,['t','u','n','t','a','n'])){
        r=m=1;   // Line 593
        k.KDC(6,t);
        k.KO(-1,t,"􀉣");
      }
      else if(k.KFCM(6,t,['u','l','o','k','a','n'])){
        r=m=1;   // Line 598
        k.KDC(6,t);
        k.KO(-1,t,"􀉤");
      }
      else if(k.KFCM(6,t,['w','o','n','p','a','2'])){
        r=m=1;   // Line 617
        k.KDC(6,t);
        k.KO(-1,t,"􀌛");
      }
      else if(k.KFCM(6,t,['k','o','k','a','n','u'])){
        r=m=1;   // Line 629
        k.KDC(6,t);
        k.KO(-1,t,"􀋿");
      }
      else if(k.KFCM(6,t,['K','o','k','a','n','u'])){
        r=m=1;   // Line 630
        k.KDC(6,t);
        k.KO(-1,t,"􀋿");
      }
      else if(k.KFCM(5,t,['a','k','a','l','a'])){
        r=m=1;   // Line 236
        k.KDC(5,t);
        k.KO(-1,t,"􀄀");
      }
      else if(k.KFCM(5,t,['a','k','a','s','a'])){
        r=m=1;   // Line 237
        k.KDC(5,t);
        k.KO(-1,t,"􀄁");
      }
      else if(k.KFCM(5,t,['a','p','a','k','i'])){
        r=m=1;   // Line 246
        k.KDC(5,t);
        k.KO(-1,t,"􀄋");
      }
      else if(k.KFCM(5,t,['a','s','e','t','e'])){
        r=m=1;   // Line 248
        k.KDC(5,t);
        k.KO(-1,t,"􀄍");
      }
      else if(k.KFCM(5,t,['c','a','n','w','a'])){
        r=m=1;   // Line 251
        k.KDC(5,t);
        k.KO(-1,t,"􀄐");
      }
      else if(k.KFCM(5,t,['c','e','n','c','i'])){
        r=m=1;   // Line 255
        k.KDC(5,t);
        k.KO(-1,t,"􀄔");
      }
      else if(k.KFCM(5,t,['c','e','n','p','o'])){
        r=m=1;   // Line 256
        k.KDC(5,t);
        k.KO(-1,t,"􀄕");
      }
      else if(k.KFCM(5,t,['c','o','n','t','o'])){
        r=m=1;   // Line 262
        k.KDC(5,t);
        k.KO(-1,t,"􀄛");
      }
      else if(k.KFCM(5,t,['c','o','n','c','a'])){
        r=m=1;   // Line 263
        k.KDC(5,t);
        k.KO(-1,t,"􀄜");
      }
      else if(k.KFCM(5,t,['c','o','n','p','u'])){
        r=m=1;   // Line 266
        k.KDC(5,t);
        k.KO(-1,t,"􀄟");
      }
      if(m) {}
      else if(k.KFCM(5,t,['h','o','n','j','a'])){
        r=m=1;   // Line 284
        k.KDC(5,t);
        k.KO(-1,t,"􀄳");
      }
      else if(k.KFCM(5,t,['h','o','t','o','n'])){
        r=m=1;   // Line 285
        k.KDC(5,t);
        k.KO(-1,t,"􀄴");
      }
      else if(k.KFCM(5,t,['h','u','k','u','n'])){
        r=m=1;   // Line 287
        k.KDC(5,t);
        k.KO(-1,t,"􀄶");
      }
      else if(k.KFCM(5,t,['h','u','n','s','i'])){
        r=m=1;   // Line 288
        k.KDC(5,t);
        k.KO(-1,t,"􀄷");
      }
      else if(k.KFCM(5,t,['i','h','a','m','o'])){
        r=m=1;   // Line 292
        k.KDC(5,t);
        k.KO(-1,t,"􀄻");
      }
      else if(k.KFCM(5,t,['i','k','a','m','a'])){
        r=m=1;   // Line 293
        k.KDC(5,t);
        k.KO(-1,t,"􀄼");
      }
      else if(k.KFCM(5,t,['i','k','a','s','i'])){
        r=m=1;   // Line 294
        k.KDC(5,t);
        k.KO(-1,t,"􀄽");
      }
      else if(k.KFCM(5,t,['i','n','a','l','o'])){
        r=m=1;   // Line 298
        k.KDC(5,t);
        k.KO(-1,t,"􀅁");
      }
      else if(k.KFCM(5,t,['i','p','u','w','e'])){
        r=m=1;   // Line 305
        k.KDC(5,t);
        k.KO(-1,t,"􀅅");
      }
      else if(k.KFCM(5,t,['j','a','m','i','n'])){
        r=m=1;   // Line 308
        k.KDC(5,t);
        k.KO(-1,t,"􀅈");
      }
      else if(k.KFCM(5,t,['j','a','n','l','u'])){
        r=m=1;   // Line 310
        k.KDC(5,t);
        k.KO(-1,t,"􀅊");
      }
      else if(k.KFCM(5,t,['j','a','t','a','n'])){
        r=m=1;   // Line 311
        k.KDC(5,t);
        k.KO(-1,t,"􀅋");
      }
      else if(k.KFCM(5,t,['k','a','l','a','n'])){
        r=m=1;   // Line 322
        k.KDC(5,t);
        k.KO(-1,t,"􀅕");
      }
      else if(k.KFCM(5,t,['k','a','n','t','a'])){
        r=m=1;   // Line 327
        k.KDC(5,t);
        k.KO(-1,t,"􀅚");
      }
      else if(k.KFCM(5,t,['k','a','p','a','n'])){
        r=m=1;   // Line 328
        k.KDC(5,t);
        k.KO(-1,t,"􀅛");
      }
      else if(k.KFCM(5,t,['k','a','t','i','n'])){
        r=m=1;   // Line 331
        k.KDC(5,t);
        k.KO(-1,t,"􀅞");
      }
      else if(k.KFCM(5,t,['k','e','n','c','a'])){
        r=m=1;   // Line 335
        k.KDC(5,t);
        k.KO(-1,t,"􀅢");
      }
      else if(k.KFCM(5,t,['k','o','m','a','n'])){
        r=m=1;   // Line 347
        k.KDC(5,t);
        k.KO(-1,t,"􀅮");
      }
      else if(k.KFCM(5,t,['k','o','n','c','o'])){
        r=m=1;   // Line 348
        k.KDC(5,t);
        k.KO(-1,t,"􀅯");
      }
      else if(k.KFCM(5,t,['k','o','n','e','n'])){
        r=m=1;   // Line 349
        k.KDC(5,t);
        k.KO(-1,t,"􀅰");
      }
      else if(k.KFCM(5,t,['k','o','n','j','e'])){
        r=m=1;   // Line 350
        k.KDC(5,t);
        k.KO(-1,t,"􀅱");
      }
      else if(k.KFCM(5,t,['k','o','n','p','a'])){
        r=m=1;   // Line 352
        k.KDC(5,t);
        k.KO(-1,t,"􀅳");
      }
      else if(k.KFCM(5,t,['k','o','s','a','n'])){
        r=m=1;   // Line 355
        k.KDC(5,t);
        k.KO(-1,t,"􀅶");
      }
      else if(k.KFCM(5,t,['k','u','m','o','n'])){
        r=m=1;   // Line 362
        k.KDC(5,t);
        k.KO(-1,t,"􀅽");
      }
      else if(k.KFCM(5,t,['k','u','w','a','n'])){
        r=m=1;   // Line 366
        k.KDC(5,t);
        k.KO(-1,t,"􀆁");
      }
      else if(k.KFCM(5,t,['l','a','n','k','i'])){
        r=m=1;   // Line 376
        k.KDC(5,t);
        k.KO(-1,t,"􀆊");
      }
      else if(k.KFCM(5,t,['l','a','n','s','a'])){
        r=m=1;   // Line 377
        k.KDC(5,t);
        k.KO(-1,t,"􀆋");
      }
      else if(k.KFCM(5,t,['l','e','k','i','n'])){
        r=m=1;   // Line 380
        k.KDC(5,t);
        k.KO(-1,t,"􀆎");
      }
      else if(k.KFCM(5,t,['l','e','n','k','a'])){
        r=m=1;   // Line 382
        k.KDC(5,t);
        k.KO(-1,t,"􀆐");
      }
      else if(k.KFCM(5,t,['l','i','p','a','n'])){
        r=m=1;   // Line 388
        k.KDC(5,t);
        k.KO(-1,t,"􀆖");
      }
      else if(k.KFCM(5,t,['l','u','n','t','i'])){
        r=m=1;   // Line 398
        k.KDC(5,t);
        k.KO(-1,t,"􀆡");
      }
      else if(k.KFCM(5,t,['m','a','c','u','n'])){
        r=m=1;   // Line 401
        k.KDC(5,t);
        k.KO(-1,t,"􀆤");
      }
      else if(k.KFCM(5,t,['m','a','k','a','n'])){
        r=m=1;   // Line 402
        k.KDC(5,t);
        k.KO(-1,t,"􀆥");
      }
      else if(k.KFCM(5,t,['m','a','t','i','n'])){
        r=m=1;   // Line 408
        k.KDC(5,t);
        k.KO(-1,t,"􀆫");
      }
      else if(k.KFCM(5,t,['m','e','l','o','n'])){
        r=m=1;   // Line 411
        k.KDC(5,t);
        k.KO(-1,t,"􀆮");
      }
      else if(k.KFCM(5,t,['m','e','n','w','o'])){
        r=m=1;   // Line 414
        k.KDC(5,t);
        k.KO(-1,t,"􀆱");
      }
      else if(k.KFCM(5,t,['m','i','c','i','n'])){
        r=m=1;   // Line 418
        k.KDC(5,t);
        k.KO(-1,t,"􀆵");
      }
      else if(k.KFCM(5,t,['m','u','n','c','u'])){
        r=m=1;   // Line 426
        k.KDC(5,t);
        k.KO(-1,t,"􀆽");
      }
      else if(k.KFCM(5,t,['n','a','k','i','2'])){
        r=m=1;   // Line 432
        k.KDC(5,t);
        k.KO(-1,t,"􀌔");
      }
      else if(k.KFCM(5,t,['n','a','l','a','n'])){
        r=m=1;   // Line 433
        k.KDC(5,t);
        k.KO(-1,t,"􀇃");
      }
      else if(k.KFCM(5,t,['n','a','s','e','2'])){
        r=m=1;   // Line 441
        k.KDC(5,t);
        k.KO(-1,t,"􀇋");
      }
      else if(k.KFCM(5,t,['n','e','n','k','a'])){
        r=m=1;   // Line 445
        k.KDC(5,t);
        k.KO(-1,t,"􀇏");
      }
      else if(k.KFCM(5,t,['o','c','o','t','a'])){
        r=m=1;   // Line 457
        k.KDC(5,t);
        k.KO(-1,t,"􀇛");
      }
      else if(k.KFCM(5,t,['o','k','u','t','u'])){
        r=m=1;   // Line 459
        k.KDC(5,t);
        k.KO(-1,t,"􀇝");
      }
      else if(k.KFCM(5,t,['o','n','i','n','2'])){
        r=m=1;   // Line 461
        k.KDC(5,t);
        k.KO(-1,t,"􀌖");
      }
      else if(k.KFCM(5,t,['o','n','t','o','n'])){
        r=m=1;   // Line 463
        k.KDC(5,t);
        k.KO(-1,t,"􀇠");
      }
      else if(k.KFCM(5,t,['o','p','o','k','i'])){
        r=m=1;   // Line 464
        k.KDC(5,t);
        k.KO(-1,t,"􀇡");
      }
      else if(k.KFCM(5,t,['o','p','o','t','u'])){
        r=m=1;   // Line 465
        k.KDC(5,t);
        k.KO(-1,t,"􀇢");
      }
      else if(k.KFCM(5,t,['o','s','o','l','e'])){
        r=m=1;   // Line 467
        k.KDC(5,t);
        k.KO(-1,t,"􀇤");
      }
      else if(k.KFCM(5,t,['o','t','a','w','e'])){
        r=m=1;   // Line 468
        k.KDC(5,t);
        k.KO(-1,t,"􀇥");
      }
      else if(k.KFCM(5,t,['p','a','j','a','n'])){
        r=m=1;   // Line 471
        k.KDC(5,t);
        k.KO(-1,t,"􀇨");
      }
      else if(k.KFCM(5,t,['p','a','n','l','i'])){
        r=m=1;   // Line 475
        k.KDC(5,t);
        k.KO(-1,t,"􀇬");
      }
      else if(k.KFCM(5,t,['p','a','n','t','a'])){
        r=m=1;   // Line 477
        k.KDC(5,t);
        k.KO(-1,t,"􀇮");
      }
      else if(k.KFCM(5,t,['p','a','p','o','n'])){
        r=m=1;   // Line 478
        k.KDC(5,t);
        k.KO(-1,t,"􀇯");
      }
      else if(k.KFCM(5,t,['p','a','s','a','n'])){
        r=m=1;   // Line 479
        k.KDC(5,t);
        k.KO(-1,t,"􀇰");
      }
      else if(k.KFCM(5,t,['p','a','t','u','n'])){
        r=m=1;   // Line 482
        k.KDC(5,t);
        k.KO(-1,t,"􀇳");
      }
      else if(k.KFCM(5,t,['p','e','m','a','n'])){
        r=m=1;   // Line 487
        k.KDC(5,t);
        k.KO(-1,t,"􀇸");
      }
      else if(k.KFCM(5,t,['p','e','n','p','e'])){
        r=m=1;   // Line 489
        k.KDC(5,t);
        k.KO(-1,t,"􀇺");
      }
      else if(k.KFCM(5,t,['p','i','j','e','n'])){
        r=m=1;   // Line 494
        k.KDC(5,t);
        k.KO(-1,t,"􀈀");
      }
      else if(k.KFCM(5,t,['p','i','n','k','o'])){
        r=m=1;   // Line 498
        k.KDC(5,t);
        k.KO(-1,t,"􀈅");
      }
      else if(k.KFCM(5,t,['p','i','n','t','u'])){
        r=m=1;   // Line 499
        k.KDC(5,t);
        k.KO(-1,t,"􀈆");
      }
      else if(k.KFCM(5,t,['p','o','l','a','n'])){
        r=m=1;   // Line 501
        k.KDC(5,t);
        k.KO(-1,t,"􀈈");
      }
      else if(k.KFCM(5,t,['p','u','c','o','n'])){
        r=m=1;   // Line 508
        k.KDC(5,t);
        k.KO(-1,t,"􀈍");
      }
      else if(k.KFCM(5,t,['s','a','m','a','n'])){
        r=m=1;   // Line 516
        k.KDC(5,t);
        k.KO(-1,t,"􀈖");
      }
      else if(k.KFCM(5,t,['s','a','n','t','i'])){
        r=m=1;   // Line 520
        k.KDC(5,t);
        k.KO(-1,t,"􀈛");
      }
      else if(k.KFCM(5,t,['s','e','p','o','2'])){
        r=m=1;   // Line 530
        k.KDC(5,t);
        k.KO(-1,t,"􀈤");
      }
      else if(k.KFCM(5,t,['s','i','j','e','n'])){
        r=m=1;   // Line 531
        k.KDC(5,t);
        k.KO(-1,t,"􀈦");
      }
      else if(k.KFCM(5,t,['s','i','k','i','n'])){
        r=m=1;   // Line 532
        k.KDC(5,t);
        k.KO(-1,t,"􀈧");
      }
      else if(k.KFCM(5,t,['s','i','n','s','i'])){
        r=m=1;   // Line 537
        k.KDC(5,t);
        k.KO(-1,t,"􀈫");
      }
      else if(k.KFCM(5,t,['t','a','j','e','n'])){
        r=m=1;   // Line 554
        k.KDC(5,t);
        k.KO(-1,t,"􀈼");
      }
      else if(k.KFCM(5,t,['t','a','l','u','n'])){
        r=m=1;   // Line 559
        k.KDC(5,t);
        k.KO(-1,t,"􀉁");
      }
      else if(k.KFCM(5,t,['t','a','m','i','n'])){
        r=m=1;   // Line 561
        k.KDC(5,t);
        k.KO(-1,t,"􀉃");
      }
      else if(k.KFCM(5,t,['t','a','s','o','n'])){
        r=m=1;   // Line 564
        k.KDC(5,t);
        k.KO(-1,t,"􀉆");
      }
      else if(k.KFCM(5,t,['t','e','n','j','a'])){
        r=m=1;   // Line 574
        k.KDC(5,t);
        k.KO(-1,t,"􀉐");
      }
      else if(k.KFCM(5,t,['t','i','n','k','i'])){
        r=m=1;   // Line 580
        k.KDC(5,t);
        k.KO(-1,t,"􀉲");
      }
      else if(k.KFCM(5,t,['t','i','t','a','n'])){
        r=m=1;   // Line 582
        k.KDC(5,t);
        k.KO(-1,t,"􀉴");
      }
      else if(k.KFCM(5,t,['t','o','n','k','o'])){
        r=m=1;   // Line 586
        k.KDC(5,t);
        k.KO(-1,t,"􀉜");
      }
      else if(k.KFCM(5,t,['u','j','a','n','u'])){
        r=m=1;   // Line 594
        k.KDC(5,t);
        k.KO(-1,t,"􀉗");
      }
      else if(k.KFCM(5,t,['u','k','a','m','a'])){
        r=m=1;   // Line 595
        k.KDC(5,t);
        k.KO(-1,t,"􀉦");
      }
      else if(k.KFCM(5,t,['u','k','i','k','i'])){
        r=m=1;   // Line 596
        k.KDC(5,t);
        k.KO(-1,t,"􀉘");
      }
      else if(k.KFCM(5,t,['u','m','a','m','i'])){
        r=m=1;   // Line 599
        k.KDC(5,t);
        k.KO(-1,t,"􀉥");
      }
      else if(k.KFCM(5,t,['u','n','i','t','u'])){
        r=m=1;   // Line 602
        k.KDC(5,t);
        k.KO(-1,t,"􀉨");
      }
      else if(k.KFCM(5,t,['u','s','e','n','2'])){
        r=m=1;   // Line 604
        k.KDC(5,t);
        k.KO(-1,t,"􀉮");
      }
      else if(k.KFCM(5,t,['w','a','t','a','n'])){
        r=m=1;   // Line 607
        k.KDC(5,t);
        k.KO(-1,t,"􀉊");
      }
      else if(k.KFCM(5,t,['w','i','s','a','n'])){
        r=m=1;   // Line 608
        k.KDC(5,t);
        k.KO(-1,t,"􀉖");
      }
      else if(k.KFCM(5,t,['w','a','n','k','u'])){
        r=m=1;   // Line 609
        k.KDC(5,t);
        k.KO(-1,t,"􀉪");
      }
      else if(k.KFCM(5,t,['w','o','n','p','a'])){
        r=m=1;   // Line 616
        k.KDC(5,t);
        k.KO(-1,t,"􀉼");
      }
      else if(k.KFCM(4,t,['a','n','a','n'])){
        r=m=1;   // Line 240
        k.KDC(4,t);
        k.KO(-1,t,"􀄅");
      }
      else if(k.KFCM(4,t,['c','a','n','u'])){
        r=m=1;   // Line 250
        k.KDC(4,t);
        k.KO(-1,t,"􀄏");
      }
      else if(k.KFCM(4,t,['c','e','k','e'])){
        r=m=1;   // Line 253
        k.KDC(4,t);
        k.KO(-1,t,"􀄒");
      }
      else if(k.KFCM(4,t,['c','e','l','e'])){
        r=m=1;   // Line 254
        k.KDC(4,t);
        k.KO(-1,t,"􀄓");
      }
      else if(k.KFCM(4,t,['c','i','m','i'])){
        r=m=1;   // Line 258
        k.KDC(4,t);
        k.KO(-1,t,"􀄗");
      }
      else if(k.KFCM(4,t,['c','i','n','a'])){
        r=m=1;   // Line 259
        k.KDC(4,t);
        k.KO(-1,t,"􀄘");
      }
      else if(k.KFCM(4,t,['c','o','h','i'])){
        r=m=1;   // Line 260
        k.KDC(4,t);
        k.KO(-1,t,"􀄙");
      }
      else if(k.KFCM(4,t,['c','u','m','a'])){
        r=m=1;   // Line 264
        k.KDC(4,t);
        k.KO(-1,t,"􀄝");
      }
      else if(k.KFCM(4,t,['c','u','n','e'])){
        r=m=1;   // Line 265
        k.KDC(4,t);
        k.KO(-1,t,"􀄞");
      }
      else if(k.KFCM(4,t,['c','u','w','i'])){
        r=m=1;   // Line 267
        k.KDC(4,t);
        k.KO(-1,t,"􀄠");
      }
      else if(k.KFCM(4,t,['e','w','i','n'])){
        r=m=1;   // Line 270
        k.KDC(4,t);
        k.KO(-1,t,"􀄤");
      }
      else if(k.KFCM(4,t,['h','a','j','a'])){
        r=m=1;   // Line 271
        k.KDC(4,t);
        k.KO(-1,t,"􀄦");
      }
      else if(k.KFCM(4,t,['h','a','s','o'])){
        r=m=1;   // Line 277
        k.KDC(4,t);
        k.KO(-1,t,"􀄬");
      }
      if(m) {}
      else if(k.KFCM(4,t,['h','e','l','a'])){
        r=m=1;   // Line 279
        k.KDC(4,t);
        k.KO(-1,t,"􀄮");
      }
      else if(k.KFCM(4,t,['h','u','s','u'])){
        r=m=1;   // Line 289
        k.KDC(4,t);
        k.KO(-1,t,"􀄸");
      }
      else if(k.KFCM(4,t,['h','u','w','a'])){
        r=m=1;   // Line 290
        k.KDC(4,t);
        k.KO(-1,t,"􀄹");
      }
      else if(k.KFCM(4,t,['i','m','a','n'])){
        r=m=1;   // Line 296
        k.KDC(4,t);
        k.KO(-1,t,"􀄿");
      }
      else if(k.KFCM(4,t,['i','n','s','u'])){
        r=m=1;   // Line 302
        k.KDC(4,t);
        k.KO(-1,t,"􀅃");
      }
      else if(k.KFCM(4,t,['j','a','t','i'])){
        r=m=1;   // Line 312
        k.KDC(4,t);
        k.KO(-1,t,"􀅌");
      }
      else if(k.KFCM(4,t,['j','o','l','i'])){
        r=m=1;   // Line 314
        k.KDC(4,t);
        k.KO(-1,t,"􀅎");
      }
      else if(k.KFCM(4,t,['j','o','n','e'])){
        r=m=1;   // Line 316
        k.KDC(4,t);
        k.KO(-1,t,"􀅐");
      }
      else if(k.KFCM(4,t,['j','u','k','a'])){
        r=m=1;   // Line 318
        k.KDC(4,t);
        k.KO(-1,t,"􀅒");
      }
      else if(k.KFCM(4,t,['j','u','t','u'])){
        r=m=1;   // Line 319
        k.KDC(4,t);
        k.KO(-1,t,"􀈄");
      }
      else if(k.KFCM(4,t,['k','a','k','i'])){
        r=m=1;   // Line 321
        k.KDC(4,t);
        k.KO(-1,t,"􀅔");
      }
      else if(k.KFCM(4,t,['k','a','l','i'])){
        r=m=1;   // Line 324
        k.KDC(4,t);
        k.KO(-1,t,"􀅗");
      }
      else if(k.KFCM(4,t,['k','a','p','u'])){
        r=m=1;   // Line 329
        k.KDC(4,t);
        k.KO(-1,t,"􀅜");
      }
      else if(k.KFCM(4,t,['k','a','t','e'])){
        r=m=1;   // Line 330
        k.KDC(4,t);
        k.KO(-1,t,"􀅝");
      }
      else if(k.KFCM(4,t,['k','a','w','a'])){
        r=m=1;   // Line 332
        k.KDC(4,t);
        k.KO(-1,t,"􀅟");
      }
      else if(k.KFCM(4,t,['k','e','l','a'])){
        r=m=1;   // Line 333
        k.KDC(4,t);
        k.KO(-1,t,"􀅠");
      }
      else if(k.KFCM(4,t,['k','i','j','u'])){
        r=m=1;   // Line 338
        k.KDC(4,t);
        k.KO(-1,t,"􀅥");
      }
      else if(k.KFCM(4,t,['k','i','k','e'])){
        r=m=1;   // Line 339
        k.KDC(4,t);
        k.KO(-1,t,"􀅦");
      }
      else if(k.KFCM(4,t,['k','i','s','a'])){
        r=m=1;   // Line 344
        k.KDC(4,t);
        k.KO(-1,t,"􀅫");
      }
      else if(k.KFCM(4,t,['k','o','t','a'])){
        r=m=1;   // Line 357
        k.KDC(4,t);
        k.KO(-1,t,"􀅸");
      }
      else if(k.KFCM(4,t,['k','u','j','o'])){
        r=m=1;   // Line 358
        k.KDC(4,t);
        k.KO(-1,t,"􀅹");
      }
      else if(k.KFCM(4,t,['k','u','k','u'])){
        r=m=1;   // Line 359
        k.KDC(4,t);
        k.KO(-1,t,"􀅺");
      }
      else if(k.KFCM(4,t,['k','u','l','a'])){
        r=m=1;   // Line 360
        k.KDC(4,t);
        k.KO(-1,t,"􀅻");
      }
      else if(k.KFCM(4,t,['k','u','m','i'])){
        r=m=1;   // Line 361
        k.KDC(4,t);
        k.KO(-1,t,"􀅼");
      }
      else if(k.KFCM(4,t,['k','u','s','a'])){
        r=m=1;   // Line 364
        k.KDC(4,t);
        k.KO(-1,t,"􀅿");
      }
      else if(k.KFCM(4,t,['k','u','t','o'])){
        r=m=1;   // Line 365
        k.KDC(4,t);
        k.KO(-1,t,"􀆀");
      }
      else if(k.KFCM(4,t,['l','a','h','a'])){
        r=m=1;   // Line 372
        k.KDC(4,t);
        k.KO(-1,t,"􀆆");
      }
      else if(k.KFCM(4,t,['l','a','k','i'])){
        r=m=1;   // Line 373
        k.KDC(4,t);
        k.KO(-1,t,"􀆇");
      }
      else if(k.KFCM(4,t,['l','a','m','o'])){
        r=m=1;   // Line 374
        k.KDC(4,t);
        k.KO(-1,t,"􀆈");
      }
      else if(k.KFCM(4,t,['l','i','j','e'])){
        r=m=1;   // Line 384
        k.KDC(4,t);
        k.KO(-1,t,"􀆒");
      }
      else if(k.KFCM(4,t,['l','i','k','a'])){
        r=m=1;   // Line 386
        k.KDC(4,t);
        k.KO(-1,t,"􀆔");
      }
      else if(k.KFCM(4,t,['l','i','l','i'])){
        r=m=1;   // Line 387
        k.KDC(4,t);
        k.KO(-1,t,"􀉿");
      }
      else if(k.KFCM(4,t,['l','i','p','u'])){
        r=m=1;   // Line 390
        k.KDC(4,t);
        k.KO(-1,t,"􀆙");
      }
      else if(k.KFCM(4,t,['l','i','s','i'])){
        r=m=1;   // Line 391
        k.KDC(4,t);
        k.KO(-1,t,"􀆚");
      }
      else if(k.KFCM(4,t,['l','i','t','o'])){
        r=m=1;   // Line 392
        k.KDC(4,t);
        k.KO(-1,t,"􀆛");
      }
      else if(k.KFCM(4,t,['m','o','n','a'])){
        r=m=1;   // Line 394
        k.KDC(4,t);
        k.KO(-1,t,"􀆝");
      }
      else if(k.KFCM(4,t,['l','o','s','o'])){
        r=m=1;   // Line 395
        k.KDC(4,t);
        k.KO(-1,t,"􀆞");
      }
      else if(k.KFCM(4,t,['l','u','k','a'])){
        r=m=1;   // Line 396
        k.KDC(4,t);
        k.KO(-1,t,"􀆟");
      }
      else if(k.KFCM(4,t,['l','u','w','a'])){
        r=m=1;   // Line 399
        k.KDC(4,t);
        k.KO(-1,t,"􀆢");
      }
      else if(k.KFCM(4,t,['m','a','k','u'])){
        r=m=1;   // Line 403
        k.KDC(4,t);
        k.KO(-1,t,"􀆦");
      }
      else if(k.KFCM(4,t,['m','a','l','o'])){
        r=m=1;   // Line 404
        k.KDC(4,t);
        k.KO(-1,t,"􀆧");
      }
      else if(k.KFCM(4,t,['m','a','n','i'])){
        r=m=1;   // Line 406
        k.KDC(4,t);
        k.KO(-1,t,"􀆩");
      }
      else if(k.KFCM(4,t,['m','e','j','a'])){
        r=m=1;   // Line 410
        k.KDC(4,t);
        k.KO(-1,t,"􀆭");
      }
      else if(k.KFCM(4,t,['m','e','n','u'])){
        r=m=1;   // Line 413
        k.KDC(4,t);
        k.KO(-1,t,"􀆰");
      }
      else if(k.KFCM(4,t,['m','e','p','u'])){
        r=m=1;   // Line 415
        k.KDC(4,t);
        k.KO(-1,t,"􀆲");
      }
      else if(k.KFCM(4,t,['m','e','s','e'])){
        r=m=1;   // Line 416
        k.KDC(4,t);
        k.KO(-1,t,"􀆳");
      }
      else if(k.KFCM(4,t,['m','i','t','a'])){
        r=m=1;   // Line 420
        k.KDC(4,t);
        k.KO(-1,t,"􀆷");
      }
      else if(k.KFCM(4,t,['m','o','m','u'])){
        r=m=1;   // Line 421
        k.KDC(4,t);
        k.KO(-1,t,"􀆸");
      }
      else if(k.KFCM(4,t,['m','o','t','o'])){
        r=m=1;   // Line 422
        k.KDC(4,t);
        k.KO(-1,t,"􀆹");
      }
      else if(k.KFCM(4,t,['m','u','k','u'])){
        r=m=1;   // Line 424
        k.KDC(4,t);
        k.KO(-1,t,"􀆻");
      }
      else if(k.KFCM(4,t,['m','u','l','u'])){
        r=m=1;   // Line 425
        k.KDC(4,t);
        k.KO(-1,t,"􀆼");
      }
      else if(k.KFCM(4,t,['m','u','s','i'])){
        r=m=1;   // Line 427
        k.KDC(4,t);
        k.KO(-1,t,"􀆾");
      }
      else if(k.KFCM(4,t,['n','a','k','i'])){
        r=m=1;   // Line 431
        k.KDC(4,t);
        k.KO(-1,t,"􀇂");
      }
      else if(k.KFCM(4,t,['n','a','m','u'])){
        r=m=1;   // Line 435
        k.KDC(4,t);
        k.KO(-1,t,"􀇅");
      }
      else if(k.KFCM(4,t,['n','a','p','a'])){
        r=m=1;   // Line 439
        k.KDC(4,t);
        k.KO(-1,t,"􀇊");
      }
      else if(k.KFCM(4,t,['n','a','s','e'])){
        r=m=1;   // Line 440
        k.KDC(4,t);
        k.KO(-1,t,"􀌁");
      }
      else if(k.KFCM(4,t,['n','e','j','e'])){
        r=m=1;   // Line 443
        k.KDC(4,t);
        k.KO(-1,t,"􀇍");
      }
      else if(k.KFCM(4,t,['n','e','l','o'])){
        r=m=1;   // Line 444
        k.KDC(4,t);
        k.KO(-1,t,"􀇎");
      }
      else if(k.KFCM(4,t,['n','e','p','a'])){
        r=m=1;   // Line 446
        k.KDC(4,t);
        k.KO(-1,t,"􀇐");
      }
      else if(k.KFCM(4,t,['n','e','s','o'])){
        r=m=1;   // Line 447
        k.KDC(4,t);
        k.KO(-1,t,"􀇑");
      }
      else if(k.KFCM(4,t,['n','i','j','u'])){
        r=m=1;   // Line 448
        k.KDC(4,t);
        k.KO(-1,t,"􀇒");
      }
      else if(k.KFCM(4,t,['n','i','k','u'])){
        r=m=1;   // Line 449
        k.KDC(4,t);
        k.KO(-1,t,"􀇓");
      }
      else if(k.KFCM(4,t,['n','i','l','e'])){
        r=m=1;   // Line 450
        k.KDC(4,t);
        k.KO(-1,t,"􀇔");
      }
      else if(k.KFCM(4,t,['n','i','w','a'])){
        r=m=1;   // Line 452
        k.KDC(4,t);
        k.KO(-1,t,"􀇖");
      }
      else if(k.KFCM(4,t,['n','u','l','a'])){
        r=m=1;   // Line 455
        k.KDC(4,t);
        k.KO(-1,t,"􀇙");
      }
      else if(k.KFCM(4,t,['o','n','i','n'])){
        r=m=1;   // Line 460
        k.KDC(4,t);
        k.KO(-1,t,"􀇞");
      }
      else if(k.KFCM(4,t,['o','n','k','o'])){
        r=m=1;   // Line 462
        k.KDC(4,t);
        k.KO(-1,t,"􀇟");
      }
      else if(k.KFCM(4,t,['p','a','n','i'])){
        r=m=1;   // Line 473
        k.KDC(4,t);
        k.KO(-1,t,"􀇪");
      }
      else if(k.KFCM(4,t,['p','a','s','u'])){
        r=m=1;   // Line 480
        k.KDC(4,t);
        k.KO(-1,t,"􀇱");
      }
      else if(k.KFCM(4,t,['p','a','t','a'])){
        r=m=1;   // Line 481
        k.KDC(4,t);
        k.KO(-1,t,"􀇲");
      }
      else if(k.KFCM(4,t,['p','a','w','o'])){
        r=m=1;   // Line 483
        k.KDC(4,t);
        k.KO(-1,t,"􀇴");
      }
      else if(k.KFCM(4,t,['p','e','k','o'])){
        r=m=1;   // Line 484
        k.KDC(4,t);
        k.KO(-1,t,"􀇵");
      }
      else if(k.KFCM(4,t,['p','e','l','a'])){
        r=m=1;   // Line 485
        k.KDC(4,t);
        k.KO(-1,t,"􀇶");
      }
      else if(k.KFCM(4,t,['p','e','s','e'])){
        r=m=1;   // Line 490
        k.KDC(4,t);
        k.KO(-1,t,"􀇼");
      }
      else if(k.KFCM(4,t,['p','i','c','e'])){
        r=m=1;   // Line 493
        k.KDC(4,t);
        k.KO(-1,t,"􀇿");
      }
      else if(k.KFCM(4,t,['p','i','l','u'])){
        r=m=1;   // Line 496
        k.KDC(4,t);
        k.KO(-1,t,"􀈂");
      }
      else if(k.KFCM(4,t,['p','o','s','a'])){
        r=m=1;   // Line 505
        k.KDC(4,t);
        k.KO(-1,t,"􀈌");
      }
      else if(k.KFCM(4,t,['p','u','k','a'])){
        r=m=1;   // Line 509
        k.KDC(4,t);
        k.KO(-1,t,"􀈎");
      }
      else if(k.KFCM(4,t,['p','u','l','a'])){
        r=m=1;   // Line 510
        k.KDC(4,t);
        k.KO(-1,t,"􀈐");
      }
      else if(k.KFCM(4,t,['p','u','m','i'])){
        r=m=1;   // Line 511
        k.KDC(4,t);
        k.KO(-1,t,"􀈑");
      }
      else if(k.KFCM(4,t,['s','a','l','a'])){
        r=m=1;   // Line 514
        k.KDC(4,t);
        k.KO(-1,t,"􀈔");
      }
      else if(k.KFCM(4,t,['s','a','m','o'])){
        r=m=1;   // Line 518
        k.KDC(4,t);
        k.KO(-1,t,"􀈙");
      }
      else if(k.KFCM(4,t,['s','a','p','i'])){
        r=m=1;   // Line 521
        k.KDC(4,t);
        k.KO(-1,t,"􀈜");
      }
      else if(k.KFCM(4,t,['s','a','t','u'])){
        r=m=1;   // Line 525
        k.KDC(4,t);
        k.KO(-1,t,"􀈠");
      }
      else if(k.KFCM(4,t,['s','e','m','a'])){
        r=m=1;   // Line 528
        k.KDC(4,t);
        k.KO(-1,t,"􀈣");
      }
      else if(k.KFCM(4,t,['s','e','p','o'])){
        r=m=1;   // Line 529
        k.KDC(4,t);
        k.KO(-1,t,"􀌗");
      }
      else if(k.KFCM(4,t,['s','i','l','a'])){
        r=m=1;   // Line 533
        k.KDC(4,t);
        k.KO(-1,t,"􀈨");
      }
      else if(k.KFCM(4,t,['s','i','p','a'])){
        r=m=1;   // Line 538
        k.KDC(4,t);
        k.KO(-1,t,"􀈬");
      }
      else if(k.KFCM(4,t,['s','i','t','o'])){
        r=m=1;   // Line 540
        k.KDC(4,t);
        k.KO(-1,t,"􀈮");
      }
      else if(k.KFCM(4,t,['s','o','l','u'])){
        r=m=1;   // Line 542
        k.KDC(4,t);
        k.KO(-1,t,"􀈰");
      }
      else if(k.KFCM(4,t,['s','o','n','e'])){
        r=m=1;   // Line 543
        k.KDC(4,t);
        k.KO(-1,t,"􀈱");
      }
      else if(k.KFCM(4,t,['s','o','p','a'])){
        r=m=1;   // Line 544
        k.KDC(4,t);
        k.KO(-1,t,"􀈲");
      }
      else if(k.KFCM(4,t,['s','o','t','o'])){
        r=m=1;   // Line 545
        k.KDC(4,t);
        k.KO(-1,t,"􀈳");
      }
      else if(k.KFCM(4,t,['s','u','k','i'])){
        r=m=1;   // Line 546
        k.KDC(4,t);
        k.KO(-1,t,"􀈴");
      }
      else if(k.KFCM(4,t,['s','u','l','a'])){
        r=m=1;   // Line 547
        k.KDC(4,t);
        k.KO(-1,t,"􀈵");
      }
      else if(k.KFCM(4,t,['t','a','t','i'])){
        r=m=1;   // Line 566
        k.KDC(4,t);
        k.KO(-1,t,"􀉈");
      }
      else if(k.KFCM(4,t,['t','a','w','e'])){
        r=m=1;   // Line 568
        k.KDC(4,t);
        k.KO(-1,t,"􀉉");
      }
      else if(k.KFCM(4,t,['t','e','k','a'])){
        r=m=1;   // Line 570
        k.KDC(4,t);
        k.KO(-1,t,"􀉌");
      }
      else if(k.KFCM(4,t,['t','e','n','e'])){
        r=m=1;   // Line 572
        k.KDC(4,t);
        k.KO(-1,t,"􀉎");
      }
      else if(k.KFCM(4,t,['t','e','p','u'])){
        r=m=1;   // Line 575
        k.KDC(4,t);
        k.KO(-1,t,"􀉑");
      }
      if(m) {}
      else if(k.KFCM(4,t,['t','i','j','u'])){
        r=m=1;   // Line 577
        k.KDC(4,t);
        k.KO(-1,t,"􀉓");
      }
      else if(k.KFCM(4,t,['t','i','k','u'])){
        r=m=1;   // Line 578
        k.KDC(4,t);
        k.KO(-1,t,"􀉔");
      }
      else if(k.KFCM(4,t,['t','i','l','e'])){
        r=m=1;   // Line 579
        k.KDC(4,t);
        k.KO(-1,t,"􀉕");
      }
      else if(k.KFCM(4,t,['t','i','p','a'])){
        r=m=1;   // Line 581
        k.KDC(4,t);
        k.KO(-1,t,"􀉳");
      }
      else if(k.KFCM(4,t,['t','i','t','i'])){
        r=m=1;   // Line 583
        k.KDC(4,t);
        k.KO(-1,t,"􀉙");
      }
      else if(k.KFCM(4,t,['t','o','l','u'])){
        r=m=1;   // Line 585
        k.KDC(4,t);
        k.KO(-1,t,"􀉭");
      }
      else if(k.KFCM(4,t,['t','o','p','e'])){
        r=m=1;   // Line 587
        k.KDC(4,t);
        k.KO(-1,t,"􀉝");
      }
      else if(k.KFCM(4,t,['t','u','k','o'])){
        r=m=1;   // Line 589
        k.KDC(4,t);
        k.KO(-1,t,"􀉟");
      }
      else if(k.KFCM(4,t,['t','u','l','a'])){
        r=m=1;   // Line 590
        k.KDC(4,t);
        k.KO(-1,t,"􀉠");
      }
      else if(k.KFCM(4,t,['t','u','s','a'])){
        r=m=1;   // Line 592
        k.KDC(4,t);
        k.KO(-1,t,"􀉢");
      }
      else if(k.KFCM(4,t,['u','s','e','n'])){
        r=m=1;   // Line 603
        k.KDC(4,t);
        k.KO(-1,t,"􀌀");
      }
      else if(k.KFCM(4,t,['w','a','l','a'])){
        r=m=1;   // Line 606
        k.KDC(4,t);
        k.KO(-1,t,"􀉩");
      }
      else if(k.KFCM(4,t,['w','a','j','u'])){
        r=m=1;   // Line 611
        k.KDC(4,t);
        k.KO(-1,t,"􀉱");
      }
      else if(k.KFCM(4,t,['w','i','j','a'])){
        r=m=1;   // Line 614
        k.KDC(4,t);
        k.KO(-1,t,"􀉸");
      }
      else if(k.KFCM(4,t,['w','i','k','i'])){
        r=m=1;   // Line 615
        k.KDC(4,t);
        k.KO(-1,t,"􀉹");
      }
      else if(k.KFCM(3,t,['a','l','u'])){
        r=m=1;   // Line 238
        k.KDC(3,t);
        k.KO(-1,t,"􀄃");
      }
      else if(k.KFCM(3,t,['a','m','o'])){
        r=m=1;   // Line 239
        k.KDC(3,t);
        k.KO(-1,t,"􀄄");
      }
      else if(k.KFCM(3,t,['a','n','i'])){
        r=m=1;   // Line 241
        k.KDC(3,t);
        k.KO(-1,t,"􀄆");
      }
      else if(k.KFCM(3,t,['a','s','a'])){
        r=m=1;   // Line 247
        k.KDC(3,t);
        k.KO(-1,t,"􀄌");
      }
      else if(k.KFCM(3,t,['c','o','n'])){
        r=m=1;   // Line 261
        k.KDC(3,t);
        k.KO(-1,t,"􀄚");
      }
      else if(k.KFCM(3,t,['e','m','e'])){
        r=m=1;   // Line 268
        k.KDC(3,t);
        k.KO(-1,t,"􀄡");
      }
      else if(k.KFCM(3,t,['h','a','n'])){
        r=m=1;   // Line 275
        k.KDC(3,t);
        k.KO(-1,t,"􀄪");
      }
      else if(k.KFCM(3,t,['h','e','n'])){
        r=m=1;   // Line 280
        k.KDC(3,t);
        k.KO(-1,t,"􀄯");
      }
      else if(k.KFCM(3,t,['h','o','n'])){
        r=m=1;   // Line 283
        k.KDC(3,t);
        k.KO(-1,t,"􀄲");
      }
      else if(k.KFCM(3,t,['i','l','i'])){
        r=m=1;   // Line 295
        k.KDC(3,t);
        k.KO(-1,t,"􀄾");
      }
      else if(k.KFCM(3,t,['i','w','e'])){
        r=m=1;   // Line 306
        k.KDC(3,t);
        k.KO(-1,t,"􀅆");
      }
      else if(k.KFCM(3,t,['j','a','n'])){
        r=m=1;   // Line 309
        k.KDC(3,t);
        k.KO(-1,t,"􀅉");
      }
      else if(k.KFCM(3,t,['j','o','n'])){
        r=m=1;   // Line 315
        k.KDC(3,t);
        k.KO(-1,t,"􀅏");
      }
      else if(k.KFCM(3,t,['k','a','n'])){
        r=m=1;   // Line 325
        k.KDC(3,t);
        k.KO(-1,t,"􀅘");
      }
      else if(k.KFCM(3,t,['k','i','n'])){
        r=m=1;   // Line 343
        k.KDC(3,t);
        k.KO(-1,t,"􀅪");
      }
      else if(k.KFCM(3,t,['k','u','n'])){
        r=m=1;   // Line 363
        k.KDC(3,t);
        k.KO(-1,t,"􀅾");
      }
      else if(k.KFCM(3,t,['l','a','n'])){
        r=m=1;   // Line 375
        k.KDC(3,t);
        k.KO(-1,t,"􀆉");
      }
      else if(k.KFCM(3,t,['l','e','n'])){
        r=m=1;   // Line 381
        k.KDC(3,t);
        k.KO(-1,t,"􀆏");
      }
      else if(k.KFCM(3,t,['l','u','n'])){
        r=m=1;   // Line 397
        k.KDC(3,t);
        k.KO(-1,t,"􀆠");
      }
      else if(k.KFCM(3,t,['m','e','n'])){
        r=m=1;   // Line 412
        k.KDC(3,t);
        k.KO(-1,t,"􀆯");
      }
      else if(k.KFCM(3,t,['n','a','n'])){
        r=m=1;   // Line 437
        k.KDC(3,t);
        k.KO(-1,t,"􀇇");
      }
      else if(k.KFCM(3,t,['n','i','n'])){
        r=m=1;   // Line 451
        k.KDC(3,t);
        k.KO(-1,t,"􀇕");
      }
      else if(k.KFCM(3,t,['n','o','n'])){
        r=m=1;   // Line 454
        k.KDC(3,t);
        k.KO(-1,t,"􀇘");
      }
      else if(k.KFCM(3,t,['o','k','e'])){
        r=m=1;   // Line 458
        k.KDC(3,t);
        k.KO(-1,t,"􀇜");
      }
      else if(k.KFCM(3,t,['o','s','a'])){
        r=m=1;   // Line 466
        k.KDC(3,t);
        k.KO(-1,t,"􀇣");
      }
      else if(k.KFCM(3,t,['o','t','i'])){
        r=m=1;   // Line 469
        k.KDC(3,t);
        k.KO(-1,t,"􀇦");
      }
      else if(k.KFCM(3,t,['p','a','n'])){
        r=m=1;   // Line 472
        k.KDC(3,t);
        k.KO(-1,t,"􀇩");
      }
      else if(k.KFCM(3,t,['p','e','n'])){
        r=m=1;   // Line 488
        k.KDC(3,t);
        k.KO(-1,t,"􀇹");
      }
      else if(k.KFCM(3,t,['p','o','n'])){
        r=m=1;   // Line 503
        k.KDC(3,t);
        k.KO(-1,t,"􀈊");
      }
      else if(k.KFCM(3,t,['s','i','n'])){
        r=m=1;   // Line 534
        k.KDC(3,t);
        k.KO(-1,t,"􀈩");
      }
      else if(k.KFCM(3,t,['s','u','n'])){
        r=m=1;   // Line 548
        k.KDC(3,t);
        k.KO(-1,t,"􀈶");
      }
      else if(k.KFCM(3,t,['t','a','n'])){
        r=m=1;   // Line 562
        k.KDC(3,t);
        k.KO(-1,t,"􀉄");
      }
      else if(k.KFCM(3,t,['t','e','n'])){
        r=m=1;   // Line 571
        k.KDC(3,t);
        k.KO(-1,t,"􀉍");
      }
      else if(k.KFCM(3,t,['t','u','n'])){
        r=m=1;   // Line 591
        k.KDC(3,t);
        k.KO(-1,t,"􀉡");
      }
      else if(k.KFCM(3,t,['u','l','i'])){
        r=m=1;   // Line 597
        k.KDC(3,t);
        k.KO(-1,t,"􀉚");
      }
      else if(k.KFCM(3,t,['u','m','o'])){
        r=m=1;   // Line 600
        k.KDC(3,t);
        k.KO(-1,t,"􀉧");
      }
      else if(k.KFCM(3,t,['u','t','a'])){
        r=m=1;   // Line 605
        k.KDC(3,t);
        k.KO(-1,t,"􀉯");
      }
      else if(k.KFCM(3,t,['w','e','n'])){
        r=m=1;   // Line 612
        k.KDC(3,t);
        k.KO(-1,t,"􀉶");
      }
      else if(k.KFCM(2,t,['c','i'])){
        r=m=1;   // Line 257
        k.KDC(2,t);
        k.KO(-1,t,"􀄖");
      }
      else if(k.KFCM(2,t,['h','e'])){
        r=m=1;   // Line 278
        k.KDC(2,t);
        k.KO(-1,t,"􀄭");
      }
      else if(k.KFCM(2,t,['h','u'])){
        r=m=1;   // Line 286
        k.KDC(2,t);
        k.KO(-1,t,"􀄵");
      }
      else if(k.KFCM(2,t,['i','n'])){
        r=m=1;   // Line 297
        k.KDC(2,t);
        k.KO(-1,t,"􀅀");
      }
      else if(k.KFCM(2,t,['j','a'])){
        r=m=1;   // Line 307
        k.KDC(2,t);
        k.KO(-1,t,"􀅇");
      }
      else if(k.KFCM(2,t,['j','e'])){
        r=m=1;   // Line 313
        k.KDC(2,t);
        k.KO(-1,t,"􀅍");
      }
      else if(k.KFCM(2,t,['j','u'])){
        r=m=1;   // Line 317
        k.KDC(2,t);
        k.KO(-1,t,"􀅑");
      }
      else if(k.KFCM(2,t,['k','a'])){
        r=m=1;   // Line 320
        k.KDC(2,t);
        k.KO(-1,t,"􀅓");
      }
      else if(k.KFCM(2,t,['k','i'])){
        r=m=1;   // Line 336
        k.KDC(2,t);
        k.KO(-1,t,"􀅣");
      }
      else if(k.KFCM(2,t,['k','o'])){
        r=m=1;   // Line 346
        k.KDC(2,t);
        k.KO(-1,t,"􀅭");
      }
      else if(k.KFCM(2,t,['l','a'])){
        r=m=1;   // Line 370
        k.KDC(2,t);
        k.KO(-1,t,"􀆄");
      }
      else if(k.KFCM(2,t,['l','e'])){
        r=m=1;   // Line 379
        k.KDC(2,t);
        k.KO(-1,t,"􀆍");
      }
      else if(k.KFCM(2,t,['l','o'])){
        r=m=1;   // Line 393
        k.KDC(2,t);
        k.KO(-1,t,"􀆜");
      }
      else if(k.KFCM(2,t,['m','i'])){
        r=m=1;   // Line 417
        k.KDC(2,t);
        k.KO(-1,t,"􀆴");
      }
      else if(k.KFCM(2,t,['m','u'])){
        r=m=1;   // Line 423
        k.KDC(2,t);
        k.KO(-1,t,"􀆺");
      }
      else if(k.KFCM(2,t,['n','a'])){
        r=m=1;   // Line 430
        k.KDC(2,t);
        k.KO(-1,t,"􀇁");
      }
      else if(k.KFCM(2,t,['n','e'])){
        r=m=1;   // Line 442
        k.KDC(2,t);
        k.KO(-1,t,"􀇌");
      }
      else if(k.KFCM(2,t,['n','o'])){
        r=m=1;   // Line 453
        k.KDC(2,t);
        k.KO(-1,t,"􀇗");
      }
      else if(k.KFCM(2,t,['p','a'])){
        r=m=1;   // Line 470
        k.KDC(2,t);
        k.KO(-1,t,"􀇧");
      }
      else if(k.KFCM(2,t,['p','i'])){
        r=m=1;   // Line 492
        k.KDC(2,t);
        k.KO(-1,t,"􀇾");
      }
      else if(k.KFCM(2,t,['p','o'])){
        r=m=1;   // Line 500
        k.KDC(2,t);
        k.KO(-1,t,"􀈇");
      }
      else if(k.KFCM(2,t,['s','a'])){
        r=m=1;   // Line 513
        k.KDC(2,t);
        k.KO(-1,t,"􀈒");
      }
      else if(k.KFCM(2,t,['s','e'])){
        r=m=1;   // Line 526
        k.KDC(2,t);
        k.KO(-1,t,"􀈡");
      }
      else if(k.KFCM(2,t,['s','o'])){
        r=m=1;   // Line 541
        k.KDC(2,t);
        k.KO(-1,t,"􀈯");
      }
      else if(k.KFCM(2,t,['t','a'])){
        r=m=1;   // Line 552
        k.KDC(2,t);
        k.KO(-1,t,"􀈺");
      }
      else if(k.KFCM(2,t,['t','e'])){
        r=m=1;   // Line 569
        k.KDC(2,t);
        k.KO(-1,t,"􀉋");
      }
      else if(k.KFCM(2,t,['t','u'])){
        r=m=1;   // Line 588
        k.KDC(2,t);
        k.KO(-1,t,"􀉞");
      }
      else if(k.KFCM(2,t,['u','n'])){
        r=m=1;   // Line 601
        k.KDC(2,t);
        k.KO(-1,t,"􀉬");
      }
      else if(k.KFCM(2,t,['w','a'])){
        r=m=1;   // Line 610
        k.KDC(2,t);
        k.KO(-1,t,"􀉰");
      }
      else if(k.KFCM(2,t,['w','i'])){
        r=m=1;   // Line 613
        k.KDC(2,t);
        k.KO(-1,t,"􀉷");
      }
      else if(k.KFCM(1,t,['o'])){
        r=m=1;   // Line 456
        k.KDC(1,t);
        k.KO(-1,t,"􀇚");
      }
      else if(k.KFCM(1,t,['0'])){
        r=m=1;   // Line 619
        k.KDC(1,t);
        k.KO(-1,t,"􀊩");
      }
      else if(k.KFCM(1,t,['1'])){
        r=m=1;   // Line 620
        k.KDC(1,t);
        k.KO(-1,t,"􀊪");
      }
      else if(k.KFCM(1,t,['2'])){
        r=m=1;   // Line 621
        k.KDC(1,t);
        k.KO(-1,t,"􀊫");
      }
      else if(k.KFCM(1,t,['3'])){
        r=m=1;   // Line 622
        k.KDC(1,t);
        k.KO(-1,t,"􀊬");
      }
      else if(k.KFCM(1,t,['4'])){
        r=m=1;   // Line 623
        k.KDC(1,t);
        k.KO(-1,t,"􀊭");
      }
      else if(k.KFCM(1,t,['5'])){
        r=m=1;   // Line 624
        k.KDC(1,t);
        k.KO(-1,t,"􀊮");
      }
      else if(k.KFCM(1,t,['6'])){
        r=m=1;   // Line 625
        k.KDC(1,t);
        k.KO(-1,t,"􀊯");
      }
      else if(k.KFCM(1,t,['7'])){
        r=m=1;   // Line 626
        k.KDC(1,t);
        k.KO(-1,t,"􀊰");
      }
      else if(k.KFCM(1,t,['8'])){
        r=m=1;   // Line 627
        k.KDC(1,t);
        k.KO(-1,t,"􀊱");
      }
      else if(k.KFCM(1,t,['9'])){
        r=m=1;   // Line 628
        k.KDC(1,t);
        k.KO(-1,t,"􀊲");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_ENTER /* 0x0D */)) {
      if(k.KFCM(8,t,['k','o','n','k','u','l','e','n'])){
        r=m=1;   // Line 351
        k.KDC(8,t);
        k.KO(-1,t,"􀅲");
      }
      else if(k.KFCM(8,t,['k','u','w','e','k','a','n','2'])){
        r=m=1;   // Line 368
        k.KDC(8,t);
        k.KO(-1,t,"􀌎");
      }
      else if(k.KFCM(8,t,['s','i','n','c','u','w','a','n'])){
        r=m=1;   // Line 535
        k.KDC(8,t);
        k.KO(-1,t,"􀈪");
      }
      else if(k.KFCM(7,t,['e','n','t','e','k','e','n'])){
        r=m=1;   // Line 269
        k.KDC(7,t);
        k.KO(-1,t,"􀄢");
      }
      else if(k.KFCM(7,t,['h','u','w','o','n','h','o'])){
        r=m=1;   // Line 291
        k.KDC(7,t);
        k.KO(-1,t,"􀄺");
      }
      else if(k.KFCM(7,t,['i','n','k','a','t','a','n'])){
        r=m=1;   // Line 299
        k.KDC(7,t);
        k.KO(-1,t,"􀅂");
      }
      else if(k.KFCM(7,t,['i','n','p','a','l','i','2'])){
        r=m=1;   // Line 301
        k.KDC(7,t);
        k.KO(-1,t,"􀌓");
      }
      else if(k.KFCM(7,t,['i','p','i','n','t','o','2'])){
        r=m=1;   // Line 304
        k.KDC(7,t);
        k.KO(-1,t,"􀌌");
      }
      else if(k.KFCM(7,t,['k','o','n','p','u','t','e'])){
        r=m=1;   // Line 353
        k.KDC(7,t);
        k.KO(-1,t,"􀅴");
      }
      else if(k.KFCM(7,t,['k','o','n','t','a','t','u'])){
        r=m=1;   // Line 354
        k.KDC(7,t);
        k.KO(-1,t,"􀅵");
      }
      else if(k.KFCM(7,t,['k','u','w','e','k','a','n'])){
        r=m=1;   // Line 367
        k.KDC(7,t);
        k.KO(-1,t,"􀆂");
      }
      else if(k.KFCM(7,t,['l','i','m','i','j','e','n'])){
        r=m=1;   // Line 389
        k.KDC(7,t);
        k.KO(-1,t,"􀆗");
      }
      else if(k.KFCM(7,t,['m','u','t','a','k','i','n'])){
        r=m=1;   // Line 428
        k.KDC(7,t);
        k.KO(-1,t,"􀆿");
      }
      else if(k.KFCM(7,t,['n','a','l','i','n','c','a'])){
        r=m=1;   // Line 434
        k.KDC(7,t);
        k.KO(-1,t,"􀇄");
      }
      else if(k.KFCM(7,t,['p','a','n','k','o','s','i'])){
        r=m=1;   // Line 474
        k.KDC(7,t);
        k.KO(-1,t,"􀇫");
      }
      else if(k.KFCM(7,t,['p','e','s','u','w','a','n'])){
        r=m=1;   // Line 491
        k.KDC(7,t);
        k.KO(-1,t,"􀇽");
      }
      else if(k.KFCM(7,t,['p','i','k','a','n','t','e'])){
        r=m=1;   // Line 497
        k.KDC(7,t);
        k.KO(-1,t,"􀈃");
      }
      else if(k.KFCM(7,t,['p','o','w','e','l','e','2'])){
        r=m=1;   // Line 507
        k.KDC(7,t);
        k.KO(-1,t,"􀌘");
      }
      else if(k.KFCM(7,t,['s','a','m','i','n','t','a'])){
        r=m=1;   // Line 517
        k.KDC(7,t);
        k.KO(-1,t,"􀈗");
      }
      else if(k.KFCM(7,t,['s','a','t','a','l','a','n'])){
        r=m=1;   // Line 523
        k.KDC(7,t);
        k.KO(-1,t,"􀈞");
      }
      else if(k.KFCM(7,t,['s','i','n','s','a','s','u'])){
        r=m=1;   // Line 536
        k.KDC(7,t);
        k.KO(-1,t,"􀉺");
      }
      else if(k.KFCM(7,t,['t','i','j','a','n','t','e'])){
        r=m=1;   // Line 576
        k.KDC(7,t);
        k.KO(-1,t,"􀉒");
      }
      else if(k.KFCM(6,t,['a','n','k','o','l','o'])){
        r=m=1;   // Line 242
        k.KDC(6,t);
        k.KO(-1,t,"􀄇");
      }
      else if(k.KFCM(6,t,['a','n','p','i','p','i'])){
        r=m=1;   // Line 243
        k.KDC(6,t);
        k.KO(-1,t,"􀄈");
      }
      else if(k.KFCM(6,t,['a','n','t','o','m','i'])){
        r=m=1;   // Line 244
        k.KDC(6,t);
        k.KO(-1,t,"􀄉");
      }
      else if(k.KFCM(6,t,['a','n','w','i','j','e'])){
        r=m=1;   // Line 245
        k.KDC(6,t);
        k.KO(-1,t,"􀄊");
      }
      else if(k.KFCM(6,t,['c','a','k','u','w','a'])){
        r=m=1;   // Line 249
        k.KDC(6,t);
        k.KO(-1,t,"􀄎");
      }
      else if(k.KFCM(6,t,['c','a','w','a','p','u'])){
        r=m=1;   // Line 252
        k.KDC(6,t);
        k.KO(-1,t,"􀄑");
      }
      else if(k.KFCM(6,t,['h','a','k','i','k','i'])){
        r=m=1;   // Line 272
        k.KDC(6,t);
        k.KO(-1,t,"􀄧");
      }
      else if(k.KFCM(6,t,['h','a','k','o','l','i'])){
        r=m=1;   // Line 273
        k.KDC(6,t);
        k.KO(-1,t,"􀄨");
      }
      else if(k.KFCM(6,t,['h','a','l','u','k','o'])){
        r=m=1;   // Line 274
        k.KDC(6,t);
        k.KO(-1,t,"􀄩");
      }
      else if(k.KFCM(6,t,['h','a','p','i','j','o'])){
        r=m=1;   // Line 276
        k.KDC(6,t);
        k.KO(-1,t,"􀄫");
      }
      else if(k.KFCM(6,t,['h','e','n','e','l','o'])){
        r=m=1;   // Line 281
        k.KDC(6,t);
        k.KO(-1,t,"􀄰");
      }
      else if(k.KFCM(6,t,['h','i','n','p','a','n'])){
        r=m=1;   // Line 282
        k.KDC(6,t);
        k.KO(-1,t,"􀄱");
      }
      else if(k.KFCM(6,t,['i','n','p','a','l','i'])){
        r=m=1;   // Line 300
        k.KDC(6,t);
        k.KO(-1,t,"􀉫");
      }
      else if(k.KFCM(6,t,['i','p','i','n','t','o'])){
        r=m=1;   // Line 303
        k.KDC(6,t);
        k.KO(-1,t,"􀅄");
      }
      else if(k.KFCM(6,t,['k','a','l','a','w','a'])){
        r=m=1;   // Line 323
        k.KDC(6,t);
        k.KO(-1,t,"􀅖");
      }
      else if(k.KFCM(6,t,['k','a','n','i','s','a'])){
        r=m=1;   // Line 326
        k.KDC(6,t);
        k.KO(-1,t,"􀅙");
      }
      else if(k.KFCM(6,t,['k','e','m','i','k','a'])){
        r=m=1;   // Line 334
        k.KDC(6,t);
        k.KO(-1,t,"􀅡");
      }
      else if(k.KFCM(6,t,['k','i','j','e','t','a'])){
        r=m=1;   // Line 337
        k.KDC(6,t);
        k.KO(-1,t,"􀅤");
      }
      else if(k.KFCM(6,t,['k','i','k','u','w','a'])){
        r=m=1;   // Line 340
        k.KDC(6,t);
        k.KO(-1,t,"􀅨");
      }
      else if(k.KFCM(6,t,['k','i','k','o','l','o'])){
        r=m=1;   // Line 341
        k.KDC(6,t);
        k.KO(-1,t,"􀅧");
      }
      else if(k.KFCM(6,t,['k','i','l','i','m','a'])){
        r=m=1;   // Line 342
        k.KDC(6,t);
        k.KO(-1,t,"􀅩");
      }
      else if(k.KFCM(6,t,['k','i','s','o','w','a'])){
        r=m=1;   // Line 345
        k.KDC(6,t);
        k.KO(-1,t,"􀅬");
      }
      else if(k.KFCM(6,t,['k','o','s','o','m','o'])){
        r=m=1;   // Line 356
        k.KDC(6,t);
        k.KO(-1,t,"􀅷");
      }
      else if(k.KFCM(6,t,['k','u','w','o','s','i'])){
        r=m=1;   // Line 369
        k.KDC(6,t);
        k.KO(-1,t,"􀆃");
      }
      else if(k.KFCM(6,t,['l','a','c','i','t','o'])){
        r=m=1;   // Line 371
        k.KDC(6,t);
        k.KO(-1,t,"􀆅");
      }
      else if(k.KFCM(6,t,['l','a','n','t','a','n'])){
        r=m=1;   // Line 378
        k.KDC(6,t);
        k.KO(-1,t,"􀆌");
      }
      else if(k.KFCM(6,t,['l','e','s','e','k','a'])){
        r=m=1;   // Line 383
        k.KDC(6,t);
        k.KO(-1,t,"􀆑");
      }
      else if(k.KFCM(6,t,['l','i','j','u','l','e'])){
        r=m=1;   // Line 385
        k.KDC(6,t);
        k.KO(-1,t,"􀆓");
      }
      else if(k.KFCM(6,t,['m','a','c','i','k','o'])){
        r=m=1;   // Line 400
        k.KDC(6,t);
        k.KO(-1,t,"􀆣");
      }
      else if(k.KFCM(6,t,['m','a','m','a','k','i'])){
        r=m=1;   // Line 405
        k.KDC(6,t);
        k.KO(-1,t,"􀆨");
      }
      else if(k.KFCM(6,t,['m','a','t','i','j','a'])){
        r=m=1;   // Line 407
        k.KDC(6,t);
        k.KO(-1,t,"􀆪");
      }
      else if(k.KFCM(6,t,['m','a','t','u','w','a'])){
        r=m=1;   // Line 409
        k.KDC(6,t);
        k.KO(-1,t,"􀆬");
      }
      else if(k.KFCM(6,t,['m','i','j','a','l','o'])){
        r=m=1;   // Line 419
        k.KDC(6,t);
        k.KO(-1,t,"􀆶");
      }
      else if(k.KFCM(6,t,['m','u','w','e','s','i'])){
        r=m=1;   // Line 429
        k.KDC(6,t);
        k.KO(-1,t,"􀇀");
      }
      else if(k.KFCM(6,t,['n','a','m','u','n','a'])){
        r=m=1;   // Line 436
        k.KDC(6,t);
        k.KO(-1,t,"􀇆");
      }
      else if(k.KFCM(6,t,['n','a','n','k','i','n'])){
        r=m=1;   // Line 438
        k.KDC(6,t);
        k.KO(-1,t,"􀇈");
      }
      else if(k.KFCM(6,t,['p','a','n','s','i','n'])){
        r=m=1;   // Line 476
        k.KDC(6,t);
        k.KO(-1,t,"􀇭");
      }
      else if(k.KFCM(6,t,['p','e','l','e','t','e'])){
        r=m=1;   // Line 486
        k.KDC(6,t);
        k.KO(-1,t,"􀇷");
      }
      else if(k.KFCM(6,t,['p','i','c','i','j','o'])){
        r=m=1;   // Line 495
        k.KDC(6,t);
        k.KO(-1,t,"􀈁");
      }
      else if(k.KFCM(6,t,['p','o','l','o','k','o'])){
        r=m=1;   // Line 502
        k.KDC(6,t);
        k.KO(-1,t,"􀈉");
      }
      else if(k.KFCM(6,t,['p','o','l','o','t','a'])){
        r=m=1;   // Line 504
        k.KDC(6,t);
        k.KO(-1,t,"􀈋");
      }
      else if(k.KFCM(6,t,['p','o','w','e','l','e'])){
        r=m=1;   // Line 506
        k.KDC(6,t);
        k.KO(-1,t,"􀉾");
      }
      else if(k.KFCM(6,t,['p','u','l','u','s','i'])){
        r=m=1;   // Line 512
        k.KDC(6,t);
        k.KO(-1,t,"􀈓");
      }
      else if(k.KFCM(6,t,['s','a','l','i','l','a'])){
        r=m=1;   // Line 515
        k.KDC(6,t);
        k.KO(-1,t,"􀈕");
      }
      else if(k.KFCM(6,t,['s','a','n','k','a','n'])){
        r=m=1;   // Line 519
        k.KDC(6,t);
        k.KO(-1,t,"􀈚");
      }
      else if(k.KFCM(6,t,['s','a','p','o','l','e'])){
        r=m=1;   // Line 522
        k.KDC(6,t);
        k.KO(-1,t,"􀈝");
      }
      else if(k.KFCM(6,t,['s','a','t','i','l','u'])){
        r=m=1;   // Line 524
        k.KDC(6,t);
        k.KO(-1,t,"􀈟");
      }
      else if(k.KFCM(6,t,['s','e','k','a','n','u'])){
        r=m=1;   // Line 527
        k.KDC(6,t);
        k.KO(-1,t,"􀈢");
      }
      else if(k.KFCM(6,t,['s','i','t','i','j','a'])){
        r=m=1;   // Line 539
        k.KDC(6,t);
        k.KO(-1,t,"􀈭");
      }
      else if(k.KFCM(6,t,['s','u','n','a','j','a'])){
        r=m=1;   // Line 549
        k.KDC(6,t);
        k.KO(-1,t,"􀈷");
      }
      else if(k.KFCM(6,t,['s','u','n','k','a','n'])){
        r=m=1;   // Line 550
        k.KDC(6,t);
        k.KO(-1,t,"􀈸");
      }
      else if(k.KFCM(6,t,['s','u','w','i','n','a'])){
        r=m=1;   // Line 551
        k.KDC(6,t);
        k.KO(-1,t,"􀈹");
      }
      else if(k.KFCM(6,t,['t','a','j','a','l','i'])){
        r=m=1;   // Line 553
        k.KDC(6,t);
        k.KO(-1,t,"􀈻");
      }
      else if(k.KFCM(6,t,['t','a','k','a','h','a'])){
        r=m=1;   // Line 555
        k.KDC(6,t);
        k.KO(-1,t,"􀈽");
      }
      else if(k.KFCM(6,t,['t','a','k','i','l','o'])){
        r=m=1;   // Line 556
        k.KDC(6,t);
        k.KO(-1,t,"􀈾");
      }
      else if(k.KFCM(6,t,['t','a','l','i','k','a'])){
        r=m=1;   // Line 557
        k.KDC(6,t);
        k.KO(-1,t,"􀈿");
      }
      else if(k.KFCM(6,t,['t','a','l','i','l','i'])){
        r=m=1;   // Line 558
        k.KDC(6,t);
        k.KO(-1,t,"􀉀");
      }
      else if(k.KFCM(6,t,['t','a','m','a','k','a'])){
        r=m=1;   // Line 560
        k.KDC(6,t);
        k.KO(-1,t,"􀉂");
      }
      else if(k.KFCM(6,t,['t','a','p','a','l','a'])){
        r=m=1;   // Line 563
        k.KDC(6,t);
        k.KO(-1,t,"􀉅");
      }
      else if(k.KFCM(6,t,['t','a','s','u','w','i'])){
        r=m=1;   // Line 565
        k.KDC(6,t);
        k.KO(-1,t,"􀉇");
      }
      else if(k.KFCM(6,t,['t','a','w','a','w','a'])){
        r=m=1;   // Line 567
        k.KDC(6,t);
        k.KO(-1,t,"􀉽");
      }
      else if(k.KFCM(6,t,['t','e','n','e','m','e'])){
        r=m=1;   // Line 573
        k.KDC(6,t);
        k.KO(-1,t,"􀉏");
      }
      else if(k.KFCM(6,t,['t','o','m','i','w','a'])){
        r=m=1;   // Line 584
        k.KDC(6,t);
        k.KO(-1,t,"􀉛");
      }
      else if(k.KFCM(6,t,['t','u','n','t','a','n'])){
        r=m=1;   // Line 593
        k.KDC(6,t);
        k.KO(-1,t,"􀉣");
      }
      else if(k.KFCM(6,t,['u','l','o','k','a','n'])){
        r=m=1;   // Line 598
        k.KDC(6,t);
        k.KO(-1,t,"􀉤");
      }
      else if(k.KFCM(6,t,['w','o','n','p','a','2'])){
        r=m=1;   // Line 617
        k.KDC(6,t);
        k.KO(-1,t,"􀌛");
      }
      else if(k.KFCM(6,t,['k','o','k','a','n','u'])){
        r=m=1;   // Line 629
        k.KDC(6,t);
        k.KO(-1,t,"􀋿");
      }
      else if(k.KFCM(6,t,['K','o','k','a','n','u'])){
        r=m=1;   // Line 630
        k.KDC(6,t);
        k.KO(-1,t,"􀋿");
      }
      else if(k.KFCM(5,t,['a','k','a','l','a'])){
        r=m=1;   // Line 236
        k.KDC(5,t);
        k.KO(-1,t,"􀄀");
      }
      else if(k.KFCM(5,t,['a','k','a','s','a'])){
        r=m=1;   // Line 237
        k.KDC(5,t);
        k.KO(-1,t,"􀄁");
      }
      else if(k.KFCM(5,t,['a','p','a','k','i'])){
        r=m=1;   // Line 246
        k.KDC(5,t);
        k.KO(-1,t,"􀄋");
      }
      else if(k.KFCM(5,t,['a','s','e','t','e'])){
        r=m=1;   // Line 248
        k.KDC(5,t);
        k.KO(-1,t,"􀄍");
      }
      else if(k.KFCM(5,t,['c','a','n','w','a'])){
        r=m=1;   // Line 251
        k.KDC(5,t);
        k.KO(-1,t,"􀄐");
      }
      else if(k.KFCM(5,t,['c','e','n','c','i'])){
        r=m=1;   // Line 255
        k.KDC(5,t);
        k.KO(-1,t,"􀄔");
      }
      else if(k.KFCM(5,t,['c','e','n','p','o'])){
        r=m=1;   // Line 256
        k.KDC(5,t);
        k.KO(-1,t,"􀄕");
      }
      else if(k.KFCM(5,t,['c','o','n','t','o'])){
        r=m=1;   // Line 262
        k.KDC(5,t);
        k.KO(-1,t,"􀄛");
      }
      else if(k.KFCM(5,t,['c','o','n','c','a'])){
        r=m=1;   // Line 263
        k.KDC(5,t);
        k.KO(-1,t,"􀄜");
      }
      else if(k.KFCM(5,t,['c','o','n','p','u'])){
        r=m=1;   // Line 266
        k.KDC(5,t);
        k.KO(-1,t,"􀄟");
      }
      if(m) {}
      else if(k.KFCM(5,t,['h','o','n','j','a'])){
        r=m=1;   // Line 284
        k.KDC(5,t);
        k.KO(-1,t,"􀄳");
      }
      else if(k.KFCM(5,t,['h','o','t','o','n'])){
        r=m=1;   // Line 285
        k.KDC(5,t);
        k.KO(-1,t,"􀄴");
      }
      else if(k.KFCM(5,t,['h','u','k','u','n'])){
        r=m=1;   // Line 287
        k.KDC(5,t);
        k.KO(-1,t,"􀄶");
      }
      else if(k.KFCM(5,t,['h','u','n','s','i'])){
        r=m=1;   // Line 288
        k.KDC(5,t);
        k.KO(-1,t,"􀄷");
      }
      else if(k.KFCM(5,t,['i','h','a','m','o'])){
        r=m=1;   // Line 292
        k.KDC(5,t);
        k.KO(-1,t,"􀄻");
      }
      else if(k.KFCM(5,t,['i','k','a','m','a'])){
        r=m=1;   // Line 293
        k.KDC(5,t);
        k.KO(-1,t,"􀄼");
      }
      else if(k.KFCM(5,t,['i','k','a','s','i'])){
        r=m=1;   // Line 294
        k.KDC(5,t);
        k.KO(-1,t,"􀄽");
      }
      else if(k.KFCM(5,t,['i','n','a','l','o'])){
        r=m=1;   // Line 298
        k.KDC(5,t);
        k.KO(-1,t,"􀅁");
      }
      else if(k.KFCM(5,t,['i','p','u','w','e'])){
        r=m=1;   // Line 305
        k.KDC(5,t);
        k.KO(-1,t,"􀅅");
      }
      else if(k.KFCM(5,t,['j','a','m','i','n'])){
        r=m=1;   // Line 308
        k.KDC(5,t);
        k.KO(-1,t,"􀅈");
      }
      else if(k.KFCM(5,t,['j','a','n','l','u'])){
        r=m=1;   // Line 310
        k.KDC(5,t);
        k.KO(-1,t,"􀅊");
      }
      else if(k.KFCM(5,t,['j','a','t','a','n'])){
        r=m=1;   // Line 311
        k.KDC(5,t);
        k.KO(-1,t,"􀅋");
      }
      else if(k.KFCM(5,t,['k','a','l','a','n'])){
        r=m=1;   // Line 322
        k.KDC(5,t);
        k.KO(-1,t,"􀅕");
      }
      else if(k.KFCM(5,t,['k','a','n','t','a'])){
        r=m=1;   // Line 327
        k.KDC(5,t);
        k.KO(-1,t,"􀅚");
      }
      else if(k.KFCM(5,t,['k','a','p','a','n'])){
        r=m=1;   // Line 328
        k.KDC(5,t);
        k.KO(-1,t,"􀅛");
      }
      else if(k.KFCM(5,t,['k','a','t','i','n'])){
        r=m=1;   // Line 331
        k.KDC(5,t);
        k.KO(-1,t,"􀅞");
      }
      else if(k.KFCM(5,t,['k','e','n','c','a'])){
        r=m=1;   // Line 335
        k.KDC(5,t);
        k.KO(-1,t,"􀅢");
      }
      else if(k.KFCM(5,t,['k','o','m','a','n'])){
        r=m=1;   // Line 347
        k.KDC(5,t);
        k.KO(-1,t,"􀅮");
      }
      else if(k.KFCM(5,t,['k','o','n','c','o'])){
        r=m=1;   // Line 348
        k.KDC(5,t);
        k.KO(-1,t,"􀅯");
      }
      else if(k.KFCM(5,t,['k','o','n','e','n'])){
        r=m=1;   // Line 349
        k.KDC(5,t);
        k.KO(-1,t,"􀅰");
      }
      else if(k.KFCM(5,t,['k','o','n','j','e'])){
        r=m=1;   // Line 350
        k.KDC(5,t);
        k.KO(-1,t,"􀅱");
      }
      else if(k.KFCM(5,t,['k','o','n','p','a'])){
        r=m=1;   // Line 352
        k.KDC(5,t);
        k.KO(-1,t,"􀅳");
      }
      else if(k.KFCM(5,t,['k','o','s','a','n'])){
        r=m=1;   // Line 355
        k.KDC(5,t);
        k.KO(-1,t,"􀅶");
      }
      else if(k.KFCM(5,t,['k','u','m','o','n'])){
        r=m=1;   // Line 362
        k.KDC(5,t);
        k.KO(-1,t,"􀅽");
      }
      else if(k.KFCM(5,t,['k','u','w','a','n'])){
        r=m=1;   // Line 366
        k.KDC(5,t);
        k.KO(-1,t,"􀆁");
      }
      else if(k.KFCM(5,t,['l','a','n','k','i'])){
        r=m=1;   // Line 376
        k.KDC(5,t);
        k.KO(-1,t,"􀆊");
      }
      else if(k.KFCM(5,t,['l','a','n','s','a'])){
        r=m=1;   // Line 377
        k.KDC(5,t);
        k.KO(-1,t,"􀆋");
      }
      else if(k.KFCM(5,t,['l','e','k','i','n'])){
        r=m=1;   // Line 380
        k.KDC(5,t);
        k.KO(-1,t,"􀆎");
      }
      else if(k.KFCM(5,t,['l','e','n','k','a'])){
        r=m=1;   // Line 382
        k.KDC(5,t);
        k.KO(-1,t,"􀆐");
      }
      else if(k.KFCM(5,t,['l','i','p','a','n'])){
        r=m=1;   // Line 388
        k.KDC(5,t);
        k.KO(-1,t,"􀆖");
      }
      else if(k.KFCM(5,t,['l','u','n','t','i'])){
        r=m=1;   // Line 398
        k.KDC(5,t);
        k.KO(-1,t,"􀆡");
      }
      else if(k.KFCM(5,t,['m','a','c','u','n'])){
        r=m=1;   // Line 401
        k.KDC(5,t);
        k.KO(-1,t,"􀆤");
      }
      else if(k.KFCM(5,t,['m','a','k','a','n'])){
        r=m=1;   // Line 402
        k.KDC(5,t);
        k.KO(-1,t,"􀆥");
      }
      else if(k.KFCM(5,t,['m','a','t','i','n'])){
        r=m=1;   // Line 408
        k.KDC(5,t);
        k.KO(-1,t,"􀆫");
      }
      else if(k.KFCM(5,t,['m','e','l','o','n'])){
        r=m=1;   // Line 411
        k.KDC(5,t);
        k.KO(-1,t,"􀆮");
      }
      else if(k.KFCM(5,t,['m','e','n','w','o'])){
        r=m=1;   // Line 414
        k.KDC(5,t);
        k.KO(-1,t,"􀆱");
      }
      else if(k.KFCM(5,t,['m','i','c','i','n'])){
        r=m=1;   // Line 418
        k.KDC(5,t);
        k.KO(-1,t,"􀆵");
      }
      else if(k.KFCM(5,t,['m','u','n','c','u'])){
        r=m=1;   // Line 426
        k.KDC(5,t);
        k.KO(-1,t,"􀆽");
      }
      else if(k.KFCM(5,t,['n','a','k','i','2'])){
        r=m=1;   // Line 432
        k.KDC(5,t);
        k.KO(-1,t,"􀌔");
      }
      else if(k.KFCM(5,t,['n','a','l','a','n'])){
        r=m=1;   // Line 433
        k.KDC(5,t);
        k.KO(-1,t,"􀇃");
      }
      else if(k.KFCM(5,t,['n','a','s','e','2'])){
        r=m=1;   // Line 441
        k.KDC(5,t);
        k.KO(-1,t,"􀇋");
      }
      else if(k.KFCM(5,t,['n','e','n','k','a'])){
        r=m=1;   // Line 445
        k.KDC(5,t);
        k.KO(-1,t,"􀇏");
      }
      else if(k.KFCM(5,t,['o','c','o','t','a'])){
        r=m=1;   // Line 457
        k.KDC(5,t);
        k.KO(-1,t,"􀇛");
      }
      else if(k.KFCM(5,t,['o','k','u','t','u'])){
        r=m=1;   // Line 459
        k.KDC(5,t);
        k.KO(-1,t,"􀇝");
      }
      else if(k.KFCM(5,t,['o','n','i','n','2'])){
        r=m=1;   // Line 461
        k.KDC(5,t);
        k.KO(-1,t,"􀌖");
      }
      else if(k.KFCM(5,t,['o','n','t','o','n'])){
        r=m=1;   // Line 463
        k.KDC(5,t);
        k.KO(-1,t,"􀇠");
      }
      else if(k.KFCM(5,t,['o','p','o','k','i'])){
        r=m=1;   // Line 464
        k.KDC(5,t);
        k.KO(-1,t,"􀇡");
      }
      else if(k.KFCM(5,t,['o','p','o','t','u'])){
        r=m=1;   // Line 465
        k.KDC(5,t);
        k.KO(-1,t,"􀇢");
      }
      else if(k.KFCM(5,t,['o','s','o','l','e'])){
        r=m=1;   // Line 467
        k.KDC(5,t);
        k.KO(-1,t,"􀇤");
      }
      else if(k.KFCM(5,t,['o','t','a','w','e'])){
        r=m=1;   // Line 468
        k.KDC(5,t);
        k.KO(-1,t,"􀇥");
      }
      else if(k.KFCM(5,t,['p','a','j','a','n'])){
        r=m=1;   // Line 471
        k.KDC(5,t);
        k.KO(-1,t,"􀇨");
      }
      else if(k.KFCM(5,t,['p','a','n','l','i'])){
        r=m=1;   // Line 475
        k.KDC(5,t);
        k.KO(-1,t,"􀇬");
      }
      else if(k.KFCM(5,t,['p','a','n','t','a'])){
        r=m=1;   // Line 477
        k.KDC(5,t);
        k.KO(-1,t,"􀇮");
      }
      else if(k.KFCM(5,t,['p','a','p','o','n'])){
        r=m=1;   // Line 478
        k.KDC(5,t);
        k.KO(-1,t,"􀇯");
      }
      else if(k.KFCM(5,t,['p','a','s','a','n'])){
        r=m=1;   // Line 479
        k.KDC(5,t);
        k.KO(-1,t,"􀇰");
      }
      else if(k.KFCM(5,t,['p','a','t','u','n'])){
        r=m=1;   // Line 482
        k.KDC(5,t);
        k.KO(-1,t,"􀇳");
      }
      else if(k.KFCM(5,t,['p','e','m','a','n'])){
        r=m=1;   // Line 487
        k.KDC(5,t);
        k.KO(-1,t,"􀇸");
      }
      else if(k.KFCM(5,t,['p','e','n','p','e'])){
        r=m=1;   // Line 489
        k.KDC(5,t);
        k.KO(-1,t,"􀇺");
      }
      else if(k.KFCM(5,t,['p','i','j','e','n'])){
        r=m=1;   // Line 494
        k.KDC(5,t);
        k.KO(-1,t,"􀈀");
      }
      else if(k.KFCM(5,t,['p','i','n','k','o'])){
        r=m=1;   // Line 498
        k.KDC(5,t);
        k.KO(-1,t,"􀈅");
      }
      else if(k.KFCM(5,t,['p','i','n','t','u'])){
        r=m=1;   // Line 499
        k.KDC(5,t);
        k.KO(-1,t,"􀈆");
      }
      else if(k.KFCM(5,t,['p','o','l','a','n'])){
        r=m=1;   // Line 501
        k.KDC(5,t);
        k.KO(-1,t,"􀈈");
      }
      else if(k.KFCM(5,t,['p','u','c','o','n'])){
        r=m=1;   // Line 508
        k.KDC(5,t);
        k.KO(-1,t,"􀈍");
      }
      else if(k.KFCM(5,t,['s','a','m','a','n'])){
        r=m=1;   // Line 516
        k.KDC(5,t);
        k.KO(-1,t,"􀈖");
      }
      else if(k.KFCM(5,t,['s','a','n','t','i'])){
        r=m=1;   // Line 520
        k.KDC(5,t);
        k.KO(-1,t,"􀈛");
      }
      else if(k.KFCM(5,t,['s','e','p','o','2'])){
        r=m=1;   // Line 530
        k.KDC(5,t);
        k.KO(-1,t,"􀈤");
      }
      else if(k.KFCM(5,t,['s','i','j','e','n'])){
        r=m=1;   // Line 531
        k.KDC(5,t);
        k.KO(-1,t,"􀈦");
      }
      else if(k.KFCM(5,t,['s','i','k','i','n'])){
        r=m=1;   // Line 532
        k.KDC(5,t);
        k.KO(-1,t,"􀈧");
      }
      else if(k.KFCM(5,t,['s','i','n','s','i'])){
        r=m=1;   // Line 537
        k.KDC(5,t);
        k.KO(-1,t,"􀈫");
      }
      else if(k.KFCM(5,t,['t','a','j','e','n'])){
        r=m=1;   // Line 554
        k.KDC(5,t);
        k.KO(-1,t,"􀈼");
      }
      else if(k.KFCM(5,t,['t','a','l','u','n'])){
        r=m=1;   // Line 559
        k.KDC(5,t);
        k.KO(-1,t,"􀉁");
      }
      else if(k.KFCM(5,t,['t','a','m','i','n'])){
        r=m=1;   // Line 561
        k.KDC(5,t);
        k.KO(-1,t,"􀉃");
      }
      else if(k.KFCM(5,t,['t','a','s','o','n'])){
        r=m=1;   // Line 564
        k.KDC(5,t);
        k.KO(-1,t,"􀉆");
      }
      else if(k.KFCM(5,t,['t','e','n','j','a'])){
        r=m=1;   // Line 574
        k.KDC(5,t);
        k.KO(-1,t,"􀉐");
      }
      else if(k.KFCM(5,t,['t','i','n','k','i'])){
        r=m=1;   // Line 580
        k.KDC(5,t);
        k.KO(-1,t,"􀉲");
      }
      else if(k.KFCM(5,t,['t','i','t','a','n'])){
        r=m=1;   // Line 582
        k.KDC(5,t);
        k.KO(-1,t,"􀉴");
      }
      else if(k.KFCM(5,t,['t','o','n','k','o'])){
        r=m=1;   // Line 586
        k.KDC(5,t);
        k.KO(-1,t,"􀉜");
      }
      else if(k.KFCM(5,t,['u','j','a','n','u'])){
        r=m=1;   // Line 594
        k.KDC(5,t);
        k.KO(-1,t,"􀉗");
      }
      else if(k.KFCM(5,t,['u','k','a','m','a'])){
        r=m=1;   // Line 595
        k.KDC(5,t);
        k.KO(-1,t,"􀉦");
      }
      else if(k.KFCM(5,t,['u','k','i','k','i'])){
        r=m=1;   // Line 596
        k.KDC(5,t);
        k.KO(-1,t,"􀉘");
      }
      else if(k.KFCM(5,t,['u','m','a','m','i'])){
        r=m=1;   // Line 599
        k.KDC(5,t);
        k.KO(-1,t,"􀉥");
      }
      else if(k.KFCM(5,t,['u','n','i','t','u'])){
        r=m=1;   // Line 602
        k.KDC(5,t);
        k.KO(-1,t,"􀉨");
      }
      else if(k.KFCM(5,t,['u','s','e','n','2'])){
        r=m=1;   // Line 604
        k.KDC(5,t);
        k.KO(-1,t,"􀉮");
      }
      else if(k.KFCM(5,t,['w','a','t','a','n'])){
        r=m=1;   // Line 607
        k.KDC(5,t);
        k.KO(-1,t,"􀉊");
      }
      else if(k.KFCM(5,t,['w','i','s','a','n'])){
        r=m=1;   // Line 608
        k.KDC(5,t);
        k.KO(-1,t,"􀉖");
      }
      else if(k.KFCM(5,t,['w','a','n','k','u'])){
        r=m=1;   // Line 609
        k.KDC(5,t);
        k.KO(-1,t,"􀉪");
      }
      else if(k.KFCM(5,t,['w','o','n','p','a'])){
        r=m=1;   // Line 616
        k.KDC(5,t);
        k.KO(-1,t,"􀉼");
      }
      else if(k.KFCM(4,t,['a','n','a','n'])){
        r=m=1;   // Line 240
        k.KDC(4,t);
        k.KO(-1,t,"􀄅");
      }
      else if(k.KFCM(4,t,['c','a','n','u'])){
        r=m=1;   // Line 250
        k.KDC(4,t);
        k.KO(-1,t,"􀄏");
      }
      else if(k.KFCM(4,t,['c','e','k','e'])){
        r=m=1;   // Line 253
        k.KDC(4,t);
        k.KO(-1,t,"􀄒");
      }
      else if(k.KFCM(4,t,['c','e','l','e'])){
        r=m=1;   // Line 254
        k.KDC(4,t);
        k.KO(-1,t,"􀄓");
      }
      else if(k.KFCM(4,t,['c','i','m','i'])){
        r=m=1;   // Line 258
        k.KDC(4,t);
        k.KO(-1,t,"􀄗");
      }
      else if(k.KFCM(4,t,['c','i','n','a'])){
        r=m=1;   // Line 259
        k.KDC(4,t);
        k.KO(-1,t,"􀄘");
      }
      else if(k.KFCM(4,t,['c','o','h','i'])){
        r=m=1;   // Line 260
        k.KDC(4,t);
        k.KO(-1,t,"􀄙");
      }
      else if(k.KFCM(4,t,['c','u','m','a'])){
        r=m=1;   // Line 264
        k.KDC(4,t);
        k.KO(-1,t,"􀄝");
      }
      else if(k.KFCM(4,t,['c','u','n','e'])){
        r=m=1;   // Line 265
        k.KDC(4,t);
        k.KO(-1,t,"􀄞");
      }
      else if(k.KFCM(4,t,['c','u','w','i'])){
        r=m=1;   // Line 267
        k.KDC(4,t);
        k.KO(-1,t,"􀄠");
      }
      else if(k.KFCM(4,t,['e','w','i','n'])){
        r=m=1;   // Line 270
        k.KDC(4,t);
        k.KO(-1,t,"􀄤");
      }
      else if(k.KFCM(4,t,['h','a','j','a'])){
        r=m=1;   // Line 271
        k.KDC(4,t);
        k.KO(-1,t,"􀄦");
      }
      else if(k.KFCM(4,t,['h','a','s','o'])){
        r=m=1;   // Line 277
        k.KDC(4,t);
        k.KO(-1,t,"􀄬");
      }
      if(m) {}
      else if(k.KFCM(4,t,['h','e','l','a'])){
        r=m=1;   // Line 279
        k.KDC(4,t);
        k.KO(-1,t,"􀄮");
      }
      else if(k.KFCM(4,t,['h','u','s','u'])){
        r=m=1;   // Line 289
        k.KDC(4,t);
        k.KO(-1,t,"􀄸");
      }
      else if(k.KFCM(4,t,['h','u','w','a'])){
        r=m=1;   // Line 290
        k.KDC(4,t);
        k.KO(-1,t,"􀄹");
      }
      else if(k.KFCM(4,t,['i','m','a','n'])){
        r=m=1;   // Line 296
        k.KDC(4,t);
        k.KO(-1,t,"􀄿");
      }
      else if(k.KFCM(4,t,['i','n','s','u'])){
        r=m=1;   // Line 302
        k.KDC(4,t);
        k.KO(-1,t,"􀅃");
      }
      else if(k.KFCM(4,t,['j','a','t','i'])){
        r=m=1;   // Line 312
        k.KDC(4,t);
        k.KO(-1,t,"􀅌");
      }
      else if(k.KFCM(4,t,['j','o','l','i'])){
        r=m=1;   // Line 314
        k.KDC(4,t);
        k.KO(-1,t,"􀅎");
      }
      else if(k.KFCM(4,t,['j','o','n','e'])){
        r=m=1;   // Line 316
        k.KDC(4,t);
        k.KO(-1,t,"􀅐");
      }
      else if(k.KFCM(4,t,['j','u','k','a'])){
        r=m=1;   // Line 318
        k.KDC(4,t);
        k.KO(-1,t,"􀅒");
      }
      else if(k.KFCM(4,t,['j','u','t','u'])){
        r=m=1;   // Line 319
        k.KDC(4,t);
        k.KO(-1,t,"􀈄");
      }
      else if(k.KFCM(4,t,['k','a','k','i'])){
        r=m=1;   // Line 321
        k.KDC(4,t);
        k.KO(-1,t,"􀅔");
      }
      else if(k.KFCM(4,t,['k','a','l','i'])){
        r=m=1;   // Line 324
        k.KDC(4,t);
        k.KO(-1,t,"􀅗");
      }
      else if(k.KFCM(4,t,['k','a','p','u'])){
        r=m=1;   // Line 329
        k.KDC(4,t);
        k.KO(-1,t,"􀅜");
      }
      else if(k.KFCM(4,t,['k','a','t','e'])){
        r=m=1;   // Line 330
        k.KDC(4,t);
        k.KO(-1,t,"􀅝");
      }
      else if(k.KFCM(4,t,['k','a','w','a'])){
        r=m=1;   // Line 332
        k.KDC(4,t);
        k.KO(-1,t,"􀅟");
      }
      else if(k.KFCM(4,t,['k','e','l','a'])){
        r=m=1;   // Line 333
        k.KDC(4,t);
        k.KO(-1,t,"􀅠");
      }
      else if(k.KFCM(4,t,['k','i','j','u'])){
        r=m=1;   // Line 338
        k.KDC(4,t);
        k.KO(-1,t,"􀅥");
      }
      else if(k.KFCM(4,t,['k','i','k','e'])){
        r=m=1;   // Line 339
        k.KDC(4,t);
        k.KO(-1,t,"􀅦");
      }
      else if(k.KFCM(4,t,['k','i','s','a'])){
        r=m=1;   // Line 344
        k.KDC(4,t);
        k.KO(-1,t,"􀅫");
      }
      else if(k.KFCM(4,t,['k','o','t','a'])){
        r=m=1;   // Line 357
        k.KDC(4,t);
        k.KO(-1,t,"􀅸");
      }
      else if(k.KFCM(4,t,['k','u','j','o'])){
        r=m=1;   // Line 358
        k.KDC(4,t);
        k.KO(-1,t,"􀅹");
      }
      else if(k.KFCM(4,t,['k','u','k','u'])){
        r=m=1;   // Line 359
        k.KDC(4,t);
        k.KO(-1,t,"􀅺");
      }
      else if(k.KFCM(4,t,['k','u','l','a'])){
        r=m=1;   // Line 360
        k.KDC(4,t);
        k.KO(-1,t,"􀅻");
      }
      else if(k.KFCM(4,t,['k','u','m','i'])){
        r=m=1;   // Line 361
        k.KDC(4,t);
        k.KO(-1,t,"􀅼");
      }
      else if(k.KFCM(4,t,['k','u','s','a'])){
        r=m=1;   // Line 364
        k.KDC(4,t);
        k.KO(-1,t,"􀅿");
      }
      else if(k.KFCM(4,t,['k','u','t','o'])){
        r=m=1;   // Line 365
        k.KDC(4,t);
        k.KO(-1,t,"􀆀");
      }
      else if(k.KFCM(4,t,['l','a','h','a'])){
        r=m=1;   // Line 372
        k.KDC(4,t);
        k.KO(-1,t,"􀆆");
      }
      else if(k.KFCM(4,t,['l','a','k','i'])){
        r=m=1;   // Line 373
        k.KDC(4,t);
        k.KO(-1,t,"􀆇");
      }
      else if(k.KFCM(4,t,['l','a','m','o'])){
        r=m=1;   // Line 374
        k.KDC(4,t);
        k.KO(-1,t,"􀆈");
      }
      else if(k.KFCM(4,t,['l','i','j','e'])){
        r=m=1;   // Line 384
        k.KDC(4,t);
        k.KO(-1,t,"􀆒");
      }
      else if(k.KFCM(4,t,['l','i','k','a'])){
        r=m=1;   // Line 386
        k.KDC(4,t);
        k.KO(-1,t,"􀆔");
      }
      else if(k.KFCM(4,t,['l','i','l','i'])){
        r=m=1;   // Line 387
        k.KDC(4,t);
        k.KO(-1,t,"􀉿");
      }
      else if(k.KFCM(4,t,['l','i','p','u'])){
        r=m=1;   // Line 390
        k.KDC(4,t);
        k.KO(-1,t,"􀆙");
      }
      else if(k.KFCM(4,t,['l','i','s','i'])){
        r=m=1;   // Line 391
        k.KDC(4,t);
        k.KO(-1,t,"􀆚");
      }
      else if(k.KFCM(4,t,['l','i','t','o'])){
        r=m=1;   // Line 392
        k.KDC(4,t);
        k.KO(-1,t,"􀆛");
      }
      else if(k.KFCM(4,t,['m','o','n','a'])){
        r=m=1;   // Line 394
        k.KDC(4,t);
        k.KO(-1,t,"􀆝");
      }
      else if(k.KFCM(4,t,['l','o','s','o'])){
        r=m=1;   // Line 395
        k.KDC(4,t);
        k.KO(-1,t,"􀆞");
      }
      else if(k.KFCM(4,t,['l','u','k','a'])){
        r=m=1;   // Line 396
        k.KDC(4,t);
        k.KO(-1,t,"􀆟");
      }
      else if(k.KFCM(4,t,['l','u','w','a'])){
        r=m=1;   // Line 399
        k.KDC(4,t);
        k.KO(-1,t,"􀆢");
      }
      else if(k.KFCM(4,t,['m','a','k','u'])){
        r=m=1;   // Line 403
        k.KDC(4,t);
        k.KO(-1,t,"􀆦");
      }
      else if(k.KFCM(4,t,['m','a','l','o'])){
        r=m=1;   // Line 404
        k.KDC(4,t);
        k.KO(-1,t,"􀆧");
      }
      else if(k.KFCM(4,t,['m','a','n','i'])){
        r=m=1;   // Line 406
        k.KDC(4,t);
        k.KO(-1,t,"􀆩");
      }
      else if(k.KFCM(4,t,['m','e','j','a'])){
        r=m=1;   // Line 410
        k.KDC(4,t);
        k.KO(-1,t,"􀆭");
      }
      else if(k.KFCM(4,t,['m','e','n','u'])){
        r=m=1;   // Line 413
        k.KDC(4,t);
        k.KO(-1,t,"􀆰");
      }
      else if(k.KFCM(4,t,['m','e','p','u'])){
        r=m=1;   // Line 415
        k.KDC(4,t);
        k.KO(-1,t,"􀆲");
      }
      else if(k.KFCM(4,t,['m','e','s','e'])){
        r=m=1;   // Line 416
        k.KDC(4,t);
        k.KO(-1,t,"􀆳");
      }
      else if(k.KFCM(4,t,['m','i','t','a'])){
        r=m=1;   // Line 420
        k.KDC(4,t);
        k.KO(-1,t,"􀆷");
      }
      else if(k.KFCM(4,t,['m','o','m','u'])){
        r=m=1;   // Line 421
        k.KDC(4,t);
        k.KO(-1,t,"􀆸");
      }
      else if(k.KFCM(4,t,['m','o','t','o'])){
        r=m=1;   // Line 422
        k.KDC(4,t);
        k.KO(-1,t,"􀆹");
      }
      else if(k.KFCM(4,t,['m','u','k','u'])){
        r=m=1;   // Line 424
        k.KDC(4,t);
        k.KO(-1,t,"􀆻");
      }
      else if(k.KFCM(4,t,['m','u','l','u'])){
        r=m=1;   // Line 425
        k.KDC(4,t);
        k.KO(-1,t,"􀆼");
      }
      else if(k.KFCM(4,t,['m','u','s','i'])){
        r=m=1;   // Line 427
        k.KDC(4,t);
        k.KO(-1,t,"􀆾");
      }
      else if(k.KFCM(4,t,['n','a','k','i'])){
        r=m=1;   // Line 431
        k.KDC(4,t);
        k.KO(-1,t,"􀇂");
      }
      else if(k.KFCM(4,t,['n','a','m','u'])){
        r=m=1;   // Line 435
        k.KDC(4,t);
        k.KO(-1,t,"􀇅");
      }
      else if(k.KFCM(4,t,['n','a','p','a'])){
        r=m=1;   // Line 439
        k.KDC(4,t);
        k.KO(-1,t,"􀇊");
      }
      else if(k.KFCM(4,t,['n','a','s','e'])){
        r=m=1;   // Line 440
        k.KDC(4,t);
        k.KO(-1,t,"􀌁");
      }
      else if(k.KFCM(4,t,['n','e','j','e'])){
        r=m=1;   // Line 443
        k.KDC(4,t);
        k.KO(-1,t,"􀇍");
      }
      else if(k.KFCM(4,t,['n','e','l','o'])){
        r=m=1;   // Line 444
        k.KDC(4,t);
        k.KO(-1,t,"􀇎");
      }
      else if(k.KFCM(4,t,['n','e','p','a'])){
        r=m=1;   // Line 446
        k.KDC(4,t);
        k.KO(-1,t,"􀇐");
      }
      else if(k.KFCM(4,t,['n','e','s','o'])){
        r=m=1;   // Line 447
        k.KDC(4,t);
        k.KO(-1,t,"􀇑");
      }
      else if(k.KFCM(4,t,['n','i','j','u'])){
        r=m=1;   // Line 448
        k.KDC(4,t);
        k.KO(-1,t,"􀇒");
      }
      else if(k.KFCM(4,t,['n','i','k','u'])){
        r=m=1;   // Line 449
        k.KDC(4,t);
        k.KO(-1,t,"􀇓");
      }
      else if(k.KFCM(4,t,['n','i','l','e'])){
        r=m=1;   // Line 450
        k.KDC(4,t);
        k.KO(-1,t,"􀇔");
      }
      else if(k.KFCM(4,t,['n','i','w','a'])){
        r=m=1;   // Line 452
        k.KDC(4,t);
        k.KO(-1,t,"􀇖");
      }
      else if(k.KFCM(4,t,['n','u','l','a'])){
        r=m=1;   // Line 455
        k.KDC(4,t);
        k.KO(-1,t,"􀇙");
      }
      else if(k.KFCM(4,t,['o','n','i','n'])){
        r=m=1;   // Line 460
        k.KDC(4,t);
        k.KO(-1,t,"􀇞");
      }
      else if(k.KFCM(4,t,['o','n','k','o'])){
        r=m=1;   // Line 462
        k.KDC(4,t);
        k.KO(-1,t,"􀇟");
      }
      else if(k.KFCM(4,t,['p','a','n','i'])){
        r=m=1;   // Line 473
        k.KDC(4,t);
        k.KO(-1,t,"􀇪");
      }
      else if(k.KFCM(4,t,['p','a','s','u'])){
        r=m=1;   // Line 480
        k.KDC(4,t);
        k.KO(-1,t,"􀇱");
      }
      else if(k.KFCM(4,t,['p','a','t','a'])){
        r=m=1;   // Line 481
        k.KDC(4,t);
        k.KO(-1,t,"􀇲");
      }
      else if(k.KFCM(4,t,['p','a','w','o'])){
        r=m=1;   // Line 483
        k.KDC(4,t);
        k.KO(-1,t,"􀇴");
      }
      else if(k.KFCM(4,t,['p','e','k','o'])){
        r=m=1;   // Line 484
        k.KDC(4,t);
        k.KO(-1,t,"􀇵");
      }
      else if(k.KFCM(4,t,['p','e','l','a'])){
        r=m=1;   // Line 485
        k.KDC(4,t);
        k.KO(-1,t,"􀇶");
      }
      else if(k.KFCM(4,t,['p','e','s','e'])){
        r=m=1;   // Line 490
        k.KDC(4,t);
        k.KO(-1,t,"􀇼");
      }
      else if(k.KFCM(4,t,['p','i','c','e'])){
        r=m=1;   // Line 493
        k.KDC(4,t);
        k.KO(-1,t,"􀇿");
      }
      else if(k.KFCM(4,t,['p','i','l','u'])){
        r=m=1;   // Line 496
        k.KDC(4,t);
        k.KO(-1,t,"􀈂");
      }
      else if(k.KFCM(4,t,['p','o','s','a'])){
        r=m=1;   // Line 505
        k.KDC(4,t);
        k.KO(-1,t,"􀈌");
      }
      else if(k.KFCM(4,t,['p','u','k','a'])){
        r=m=1;   // Line 509
        k.KDC(4,t);
        k.KO(-1,t,"􀈎");
      }
      else if(k.KFCM(4,t,['p','u','l','a'])){
        r=m=1;   // Line 510
        k.KDC(4,t);
        k.KO(-1,t,"􀈐");
      }
      else if(k.KFCM(4,t,['p','u','m','i'])){
        r=m=1;   // Line 511
        k.KDC(4,t);
        k.KO(-1,t,"􀈑");
      }
      else if(k.KFCM(4,t,['s','a','l','a'])){
        r=m=1;   // Line 514
        k.KDC(4,t);
        k.KO(-1,t,"􀈔");
      }
      else if(k.KFCM(4,t,['s','a','m','o'])){
        r=m=1;   // Line 518
        k.KDC(4,t);
        k.KO(-1,t,"􀈙");
      }
      else if(k.KFCM(4,t,['s','a','p','i'])){
        r=m=1;   // Line 521
        k.KDC(4,t);
        k.KO(-1,t,"􀈜");
      }
      else if(k.KFCM(4,t,['s','a','t','u'])){
        r=m=1;   // Line 525
        k.KDC(4,t);
        k.KO(-1,t,"􀈠");
      }
      else if(k.KFCM(4,t,['s','e','m','a'])){
        r=m=1;   // Line 528
        k.KDC(4,t);
        k.KO(-1,t,"􀈣");
      }
      else if(k.KFCM(4,t,['s','e','p','o'])){
        r=m=1;   // Line 529
        k.KDC(4,t);
        k.KO(-1,t,"􀌗");
      }
      else if(k.KFCM(4,t,['s','i','l','a'])){
        r=m=1;   // Line 533
        k.KDC(4,t);
        k.KO(-1,t,"􀈨");
      }
      else if(k.KFCM(4,t,['s','i','p','a'])){
        r=m=1;   // Line 538
        k.KDC(4,t);
        k.KO(-1,t,"􀈬");
      }
      else if(k.KFCM(4,t,['s','i','t','o'])){
        r=m=1;   // Line 540
        k.KDC(4,t);
        k.KO(-1,t,"􀈮");
      }
      else if(k.KFCM(4,t,['s','o','l','u'])){
        r=m=1;   // Line 542
        k.KDC(4,t);
        k.KO(-1,t,"􀈰");
      }
      else if(k.KFCM(4,t,['s','o','n','e'])){
        r=m=1;   // Line 543
        k.KDC(4,t);
        k.KO(-1,t,"􀈱");
      }
      else if(k.KFCM(4,t,['s','o','p','a'])){
        r=m=1;   // Line 544
        k.KDC(4,t);
        k.KO(-1,t,"􀈲");
      }
      else if(k.KFCM(4,t,['s','o','t','o'])){
        r=m=1;   // Line 545
        k.KDC(4,t);
        k.KO(-1,t,"􀈳");
      }
      else if(k.KFCM(4,t,['s','u','k','i'])){
        r=m=1;   // Line 546
        k.KDC(4,t);
        k.KO(-1,t,"􀈴");
      }
      else if(k.KFCM(4,t,['s','u','l','a'])){
        r=m=1;   // Line 547
        k.KDC(4,t);
        k.KO(-1,t,"􀈵");
      }
      else if(k.KFCM(4,t,['t','a','t','i'])){
        r=m=1;   // Line 566
        k.KDC(4,t);
        k.KO(-1,t,"􀉈");
      }
      else if(k.KFCM(4,t,['t','a','w','e'])){
        r=m=1;   // Line 568
        k.KDC(4,t);
        k.KO(-1,t,"􀉉");
      }
      else if(k.KFCM(4,t,['t','e','k','a'])){
        r=m=1;   // Line 570
        k.KDC(4,t);
        k.KO(-1,t,"􀉌");
      }
      else if(k.KFCM(4,t,['t','e','n','e'])){
        r=m=1;   // Line 572
        k.KDC(4,t);
        k.KO(-1,t,"􀉎");
      }
      else if(k.KFCM(4,t,['t','e','p','u'])){
        r=m=1;   // Line 575
        k.KDC(4,t);
        k.KO(-1,t,"􀉑");
      }
      if(m) {}
      else if(k.KFCM(4,t,['t','i','j','u'])){
        r=m=1;   // Line 577
        k.KDC(4,t);
        k.KO(-1,t,"􀉓");
      }
      else if(k.KFCM(4,t,['t','i','k','u'])){
        r=m=1;   // Line 578
        k.KDC(4,t);
        k.KO(-1,t,"􀉔");
      }
      else if(k.KFCM(4,t,['t','i','l','e'])){
        r=m=1;   // Line 579
        k.KDC(4,t);
        k.KO(-1,t,"􀉕");
      }
      else if(k.KFCM(4,t,['t','i','p','a'])){
        r=m=1;   // Line 581
        k.KDC(4,t);
        k.KO(-1,t,"􀉳");
      }
      else if(k.KFCM(4,t,['t','i','t','i'])){
        r=m=1;   // Line 583
        k.KDC(4,t);
        k.KO(-1,t,"􀉙");
      }
      else if(k.KFCM(4,t,['t','o','l','u'])){
        r=m=1;   // Line 585
        k.KDC(4,t);
        k.KO(-1,t,"􀉭");
      }
      else if(k.KFCM(4,t,['t','o','p','e'])){
        r=m=1;   // Line 587
        k.KDC(4,t);
        k.KO(-1,t,"􀉝");
      }
      else if(k.KFCM(4,t,['t','u','k','o'])){
        r=m=1;   // Line 589
        k.KDC(4,t);
        k.KO(-1,t,"􀉟");
      }
      else if(k.KFCM(4,t,['t','u','l','a'])){
        r=m=1;   // Line 590
        k.KDC(4,t);
        k.KO(-1,t,"􀉠");
      }
      else if(k.KFCM(4,t,['t','u','s','a'])){
        r=m=1;   // Line 592
        k.KDC(4,t);
        k.KO(-1,t,"􀉢");
      }
      else if(k.KFCM(4,t,['u','s','e','n'])){
        r=m=1;   // Line 603
        k.KDC(4,t);
        k.KO(-1,t,"􀌀");
      }
      else if(k.KFCM(4,t,['w','a','l','a'])){
        r=m=1;   // Line 606
        k.KDC(4,t);
        k.KO(-1,t,"􀉩");
      }
      else if(k.KFCM(4,t,['w','a','j','u'])){
        r=m=1;   // Line 611
        k.KDC(4,t);
        k.KO(-1,t,"􀉱");
      }
      else if(k.KFCM(4,t,['w','i','j','a'])){
        r=m=1;   // Line 614
        k.KDC(4,t);
        k.KO(-1,t,"􀉸");
      }
      else if(k.KFCM(4,t,['w','i','k','i'])){
        r=m=1;   // Line 615
        k.KDC(4,t);
        k.KO(-1,t,"􀉹");
      }
      else if(k.KFCM(3,t,['a','l','u'])){
        r=m=1;   // Line 238
        k.KDC(3,t);
        k.KO(-1,t,"􀄃");
      }
      else if(k.KFCM(3,t,['a','m','o'])){
        r=m=1;   // Line 239
        k.KDC(3,t);
        k.KO(-1,t,"􀄄");
      }
      else if(k.KFCM(3,t,['a','n','i'])){
        r=m=1;   // Line 241
        k.KDC(3,t);
        k.KO(-1,t,"􀄆");
      }
      else if(k.KFCM(3,t,['a','s','a'])){
        r=m=1;   // Line 247
        k.KDC(3,t);
        k.KO(-1,t,"􀄌");
      }
      else if(k.KFCM(3,t,['c','o','n'])){
        r=m=1;   // Line 261
        k.KDC(3,t);
        k.KO(-1,t,"􀄚");
      }
      else if(k.KFCM(3,t,['e','m','e'])){
        r=m=1;   // Line 268
        k.KDC(3,t);
        k.KO(-1,t,"􀄡");
      }
      else if(k.KFCM(3,t,['h','a','n'])){
        r=m=1;   // Line 275
        k.KDC(3,t);
        k.KO(-1,t,"􀄪");
      }
      else if(k.KFCM(3,t,['h','e','n'])){
        r=m=1;   // Line 280
        k.KDC(3,t);
        k.KO(-1,t,"􀄯");
      }
      else if(k.KFCM(3,t,['h','o','n'])){
        r=m=1;   // Line 283
        k.KDC(3,t);
        k.KO(-1,t,"􀄲");
      }
      else if(k.KFCM(3,t,['i','l','i'])){
        r=m=1;   // Line 295
        k.KDC(3,t);
        k.KO(-1,t,"􀄾");
      }
      else if(k.KFCM(3,t,['i','w','e'])){
        r=m=1;   // Line 306
        k.KDC(3,t);
        k.KO(-1,t,"􀅆");
      }
      else if(k.KFCM(3,t,['j','a','n'])){
        r=m=1;   // Line 309
        k.KDC(3,t);
        k.KO(-1,t,"􀅉");
      }
      else if(k.KFCM(3,t,['j','o','n'])){
        r=m=1;   // Line 315
        k.KDC(3,t);
        k.KO(-1,t,"􀅏");
      }
      else if(k.KFCM(3,t,['k','a','n'])){
        r=m=1;   // Line 325
        k.KDC(3,t);
        k.KO(-1,t,"􀅘");
      }
      else if(k.KFCM(3,t,['k','i','n'])){
        r=m=1;   // Line 343
        k.KDC(3,t);
        k.KO(-1,t,"􀅪");
      }
      else if(k.KFCM(3,t,['k','u','n'])){
        r=m=1;   // Line 363
        k.KDC(3,t);
        k.KO(-1,t,"􀅾");
      }
      else if(k.KFCM(3,t,['l','a','n'])){
        r=m=1;   // Line 375
        k.KDC(3,t);
        k.KO(-1,t,"􀆉");
      }
      else if(k.KFCM(3,t,['l','e','n'])){
        r=m=1;   // Line 381
        k.KDC(3,t);
        k.KO(-1,t,"􀆏");
      }
      else if(k.KFCM(3,t,['l','u','n'])){
        r=m=1;   // Line 397
        k.KDC(3,t);
        k.KO(-1,t,"􀆠");
      }
      else if(k.KFCM(3,t,['m','e','n'])){
        r=m=1;   // Line 412
        k.KDC(3,t);
        k.KO(-1,t,"􀆯");
      }
      else if(k.KFCM(3,t,['n','a','n'])){
        r=m=1;   // Line 437
        k.KDC(3,t);
        k.KO(-1,t,"􀇇");
      }
      else if(k.KFCM(3,t,['n','i','n'])){
        r=m=1;   // Line 451
        k.KDC(3,t);
        k.KO(-1,t,"􀇕");
      }
      else if(k.KFCM(3,t,['n','o','n'])){
        r=m=1;   // Line 454
        k.KDC(3,t);
        k.KO(-1,t,"􀇘");
      }
      else if(k.KFCM(3,t,['o','k','e'])){
        r=m=1;   // Line 458
        k.KDC(3,t);
        k.KO(-1,t,"􀇜");
      }
      else if(k.KFCM(3,t,['o','s','a'])){
        r=m=1;   // Line 466
        k.KDC(3,t);
        k.KO(-1,t,"􀇣");
      }
      else if(k.KFCM(3,t,['o','t','i'])){
        r=m=1;   // Line 469
        k.KDC(3,t);
        k.KO(-1,t,"􀇦");
      }
      else if(k.KFCM(3,t,['p','a','n'])){
        r=m=1;   // Line 472
        k.KDC(3,t);
        k.KO(-1,t,"􀇩");
      }
      else if(k.KFCM(3,t,['p','e','n'])){
        r=m=1;   // Line 488
        k.KDC(3,t);
        k.KO(-1,t,"􀇹");
      }
      else if(k.KFCM(3,t,['p','o','n'])){
        r=m=1;   // Line 503
        k.KDC(3,t);
        k.KO(-1,t,"􀈊");
      }
      else if(k.KFCM(3,t,['s','i','n'])){
        r=m=1;   // Line 534
        k.KDC(3,t);
        k.KO(-1,t,"􀈩");
      }
      else if(k.KFCM(3,t,['s','u','n'])){
        r=m=1;   // Line 548
        k.KDC(3,t);
        k.KO(-1,t,"􀈶");
      }
      else if(k.KFCM(3,t,['t','a','n'])){
        r=m=1;   // Line 562
        k.KDC(3,t);
        k.KO(-1,t,"􀉄");
      }
      else if(k.KFCM(3,t,['t','e','n'])){
        r=m=1;   // Line 571
        k.KDC(3,t);
        k.KO(-1,t,"􀉍");
      }
      else if(k.KFCM(3,t,['t','u','n'])){
        r=m=1;   // Line 591
        k.KDC(3,t);
        k.KO(-1,t,"􀉡");
      }
      else if(k.KFCM(3,t,['u','l','i'])){
        r=m=1;   // Line 597
        k.KDC(3,t);
        k.KO(-1,t,"􀉚");
      }
      else if(k.KFCM(3,t,['u','m','o'])){
        r=m=1;   // Line 600
        k.KDC(3,t);
        k.KO(-1,t,"􀉧");
      }
      else if(k.KFCM(3,t,['u','t','a'])){
        r=m=1;   // Line 605
        k.KDC(3,t);
        k.KO(-1,t,"􀉯");
      }
      else if(k.KFCM(3,t,['w','e','n'])){
        r=m=1;   // Line 612
        k.KDC(3,t);
        k.KO(-1,t,"􀉶");
      }
      else if(k.KFCM(2,t,['c','i'])){
        r=m=1;   // Line 257
        k.KDC(2,t);
        k.KO(-1,t,"􀄖");
      }
      else if(k.KFCM(2,t,['h','e'])){
        r=m=1;   // Line 278
        k.KDC(2,t);
        k.KO(-1,t,"􀄭");
      }
      else if(k.KFCM(2,t,['h','u'])){
        r=m=1;   // Line 286
        k.KDC(2,t);
        k.KO(-1,t,"􀄵");
      }
      else if(k.KFCM(2,t,['i','n'])){
        r=m=1;   // Line 297
        k.KDC(2,t);
        k.KO(-1,t,"􀅀");
      }
      else if(k.KFCM(2,t,['j','a'])){
        r=m=1;   // Line 307
        k.KDC(2,t);
        k.KO(-1,t,"􀅇");
      }
      else if(k.KFCM(2,t,['j','e'])){
        r=m=1;   // Line 313
        k.KDC(2,t);
        k.KO(-1,t,"􀅍");
      }
      else if(k.KFCM(2,t,['j','u'])){
        r=m=1;   // Line 317
        k.KDC(2,t);
        k.KO(-1,t,"􀅑");
      }
      else if(k.KFCM(2,t,['k','a'])){
        r=m=1;   // Line 320
        k.KDC(2,t);
        k.KO(-1,t,"􀅓");
      }
      else if(k.KFCM(2,t,['k','i'])){
        r=m=1;   // Line 336
        k.KDC(2,t);
        k.KO(-1,t,"􀅣");
      }
      else if(k.KFCM(2,t,['k','o'])){
        r=m=1;   // Line 346
        k.KDC(2,t);
        k.KO(-1,t,"􀅭");
      }
      else if(k.KFCM(2,t,['l','a'])){
        r=m=1;   // Line 370
        k.KDC(2,t);
        k.KO(-1,t,"􀆄");
      }
      else if(k.KFCM(2,t,['l','e'])){
        r=m=1;   // Line 379
        k.KDC(2,t);
        k.KO(-1,t,"􀆍");
      }
      else if(k.KFCM(2,t,['l','o'])){
        r=m=1;   // Line 393
        k.KDC(2,t);
        k.KO(-1,t,"􀆜");
      }
      else if(k.KFCM(2,t,['m','i'])){
        r=m=1;   // Line 417
        k.KDC(2,t);
        k.KO(-1,t,"􀆴");
      }
      else if(k.KFCM(2,t,['m','u'])){
        r=m=1;   // Line 423
        k.KDC(2,t);
        k.KO(-1,t,"􀆺");
      }
      else if(k.KFCM(2,t,['n','a'])){
        r=m=1;   // Line 430
        k.KDC(2,t);
        k.KO(-1,t,"􀇁");
      }
      else if(k.KFCM(2,t,['n','e'])){
        r=m=1;   // Line 442
        k.KDC(2,t);
        k.KO(-1,t,"􀇌");
      }
      else if(k.KFCM(2,t,['n','o'])){
        r=m=1;   // Line 453
        k.KDC(2,t);
        k.KO(-1,t,"􀇗");
      }
      else if(k.KFCM(2,t,['p','a'])){
        r=m=1;   // Line 470
        k.KDC(2,t);
        k.KO(-1,t,"􀇧");
      }
      else if(k.KFCM(2,t,['p','i'])){
        r=m=1;   // Line 492
        k.KDC(2,t);
        k.KO(-1,t,"􀇾");
      }
      else if(k.KFCM(2,t,['p','o'])){
        r=m=1;   // Line 500
        k.KDC(2,t);
        k.KO(-1,t,"􀈇");
      }
      else if(k.KFCM(2,t,['s','a'])){
        r=m=1;   // Line 513
        k.KDC(2,t);
        k.KO(-1,t,"􀈒");
      }
      else if(k.KFCM(2,t,['s','e'])){
        r=m=1;   // Line 526
        k.KDC(2,t);
        k.KO(-1,t,"􀈡");
      }
      else if(k.KFCM(2,t,['s','o'])){
        r=m=1;   // Line 541
        k.KDC(2,t);
        k.KO(-1,t,"􀈯");
      }
      else if(k.KFCM(2,t,['t','a'])){
        r=m=1;   // Line 552
        k.KDC(2,t);
        k.KO(-1,t,"􀈺");
      }
      else if(k.KFCM(2,t,['t','e'])){
        r=m=1;   // Line 569
        k.KDC(2,t);
        k.KO(-1,t,"􀉋");
      }
      else if(k.KFCM(2,t,['t','u'])){
        r=m=1;   // Line 588
        k.KDC(2,t);
        k.KO(-1,t,"􀉞");
      }
      else if(k.KFCM(2,t,['u','n'])){
        r=m=1;   // Line 601
        k.KDC(2,t);
        k.KO(-1,t,"􀉬");
      }
      else if(k.KFCM(2,t,['w','a'])){
        r=m=1;   // Line 610
        k.KDC(2,t);
        k.KO(-1,t,"􀉰");
      }
      else if(k.KFCM(2,t,['w','i'])){
        r=m=1;   // Line 613
        k.KDC(2,t);
        k.KO(-1,t,"􀉷");
      }
      else if(k.KFCM(1,t,['o'])){
        r=m=1;   // Line 456
        k.KDC(1,t);
        k.KO(-1,t,"􀇚");
      }
      else if(k.KFCM(1,t,['0'])){
        r=m=1;   // Line 619
        k.KDC(1,t);
        k.KO(-1,t,"􀊩");
      }
      else if(k.KFCM(1,t,['1'])){
        r=m=1;   // Line 620
        k.KDC(1,t);
        k.KO(-1,t,"􀊪");
      }
      else if(k.KFCM(1,t,['2'])){
        r=m=1;   // Line 621
        k.KDC(1,t);
        k.KO(-1,t,"􀊫");
      }
      else if(k.KFCM(1,t,['3'])){
        r=m=1;   // Line 622
        k.KDC(1,t);
        k.KO(-1,t,"􀊬");
      }
      else if(k.KFCM(1,t,['4'])){
        r=m=1;   // Line 623
        k.KDC(1,t);
        k.KO(-1,t,"􀊭");
      }
      else if(k.KFCM(1,t,['5'])){
        r=m=1;   // Line 624
        k.KDC(1,t);
        k.KO(-1,t,"􀊮");
      }
      else if(k.KFCM(1,t,['6'])){
        r=m=1;   // Line 625
        k.KDC(1,t);
        k.KO(-1,t,"􀊯");
      }
      else if(k.KFCM(1,t,['7'])){
        r=m=1;   // Line 626
        k.KDC(1,t);
        k.KO(-1,t,"􀊰");
      }
      else if(k.KFCM(1,t,['8'])){
        r=m=1;   // Line 627
        k.KDC(1,t);
        k.KO(-1,t,"􀊱");
      }
      else if(k.KFCM(1,t,['9'])){
        r=m=1;   // Line 628
        k.KDC(1,t);
        k.KO(-1,t,"􀊲");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(k.KFCM(2,t,['、','︁'])){
        r=m=1;   // Line 32
        k.KDC(2,t);
      }
      else if(k.KFCM(2,t,['。','︁'])){
        r=m=1;   // Line 33
        k.KDC(2,t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"~");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"W");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"E");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"R");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"T");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"Y");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"I");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"O");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"P");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"A");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"D");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 65
        k.KDC(0,t);
        k.KO(-1,t,"G");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,"H");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"J");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"L");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"C");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"V");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"B");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"N");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"M");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"　");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"`");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"‹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"›");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 121
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 127
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"　");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x100)) {
      if(1){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"、︁");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x101)) {
      if(1){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"。︁");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(k.KFCM(8,t,['k','o','n','k','u','l','e','n'])){
        r=m=1;   // Line 351
        k.KDC(8,t);
        k.KO(-1,t,"􀅲");
      }
      else if(k.KFCM(8,t,['k','u','w','e','k','a','n','2'])){
        r=m=1;   // Line 368
        k.KDC(8,t);
        k.KO(-1,t,"􀌎");
      }
      else if(k.KFCM(8,t,['s','i','n','c','u','w','a','n'])){
        r=m=1;   // Line 535
        k.KDC(8,t);
        k.KO(-1,t,"􀈪");
      }
      else if(k.KFCM(7,t,['e','n','t','e','k','e','n'])){
        r=m=1;   // Line 269
        k.KDC(7,t);
        k.KO(-1,t,"􀄢");
      }
      else if(k.KFCM(7,t,['h','u','w','o','n','h','o'])){
        r=m=1;   // Line 291
        k.KDC(7,t);
        k.KO(-1,t,"􀄺");
      }
      else if(k.KFCM(7,t,['i','n','k','a','t','a','n'])){
        r=m=1;   // Line 299
        k.KDC(7,t);
        k.KO(-1,t,"􀅂");
      }
      else if(k.KFCM(7,t,['i','n','p','a','l','i','2'])){
        r=m=1;   // Line 301
        k.KDC(7,t);
        k.KO(-1,t,"􀌓");
      }
      else if(k.KFCM(7,t,['i','p','i','n','t','o','2'])){
        r=m=1;   // Line 304
        k.KDC(7,t);
        k.KO(-1,t,"􀌌");
      }
      else if(k.KFCM(7,t,['k','o','n','p','u','t','e'])){
        r=m=1;   // Line 353
        k.KDC(7,t);
        k.KO(-1,t,"􀅴");
      }
      else if(k.KFCM(7,t,['k','o','n','t','a','t','u'])){
        r=m=1;   // Line 354
        k.KDC(7,t);
        k.KO(-1,t,"􀅵");
      }
      else if(k.KFCM(7,t,['k','u','w','e','k','a','n'])){
        r=m=1;   // Line 367
        k.KDC(7,t);
        k.KO(-1,t,"􀆂");
      }
      else if(k.KFCM(7,t,['l','i','m','i','j','e','n'])){
        r=m=1;   // Line 389
        k.KDC(7,t);
        k.KO(-1,t,"􀆗");
      }
      else if(k.KFCM(7,t,['m','u','t','a','k','i','n'])){
        r=m=1;   // Line 428
        k.KDC(7,t);
        k.KO(-1,t,"􀆿");
      }
      else if(k.KFCM(7,t,['n','a','l','i','n','c','a'])){
        r=m=1;   // Line 434
        k.KDC(7,t);
        k.KO(-1,t,"􀇄");
      }
      else if(k.KFCM(7,t,['p','a','n','k','o','s','i'])){
        r=m=1;   // Line 474
        k.KDC(7,t);
        k.KO(-1,t,"􀇫");
      }
      else if(k.KFCM(7,t,['p','e','s','u','w','a','n'])){
        r=m=1;   // Line 491
        k.KDC(7,t);
        k.KO(-1,t,"􀇽");
      }
      else if(k.KFCM(7,t,['p','i','k','a','n','t','e'])){
        r=m=1;   // Line 497
        k.KDC(7,t);
        k.KO(-1,t,"􀈃");
      }
      else if(k.KFCM(7,t,['p','o','w','e','l','e','2'])){
        r=m=1;   // Line 507
        k.KDC(7,t);
        k.KO(-1,t,"􀌘");
      }
      else if(k.KFCM(7,t,['s','a','m','i','n','t','a'])){
        r=m=1;   // Line 517
        k.KDC(7,t);
        k.KO(-1,t,"􀈗");
      }
      else if(k.KFCM(7,t,['s','a','t','a','l','a','n'])){
        r=m=1;   // Line 523
        k.KDC(7,t);
        k.KO(-1,t,"􀈞");
      }
      else if(k.KFCM(7,t,['s','i','n','s','a','s','u'])){
        r=m=1;   // Line 536
        k.KDC(7,t);
        k.KO(-1,t,"􀉺");
      }
      else if(k.KFCM(7,t,['t','i','j','a','n','t','e'])){
        r=m=1;   // Line 576
        k.KDC(7,t);
        k.KO(-1,t,"􀉒");
      }
      else if(k.KFCM(6,t,['a','n','k','o','l','o'])){
        r=m=1;   // Line 242
        k.KDC(6,t);
        k.KO(-1,t,"􀄇");
      }
      else if(k.KFCM(6,t,['a','n','p','i','p','i'])){
        r=m=1;   // Line 243
        k.KDC(6,t);
        k.KO(-1,t,"􀄈");
      }
      else if(k.KFCM(6,t,['a','n','t','o','m','i'])){
        r=m=1;   // Line 244
        k.KDC(6,t);
        k.KO(-1,t,"􀄉");
      }
      else if(k.KFCM(6,t,['a','n','w','i','j','e'])){
        r=m=1;   // Line 245
        k.KDC(6,t);
        k.KO(-1,t,"􀄊");
      }
      else if(k.KFCM(6,t,['c','a','k','u','w','a'])){
        r=m=1;   // Line 249
        k.KDC(6,t);
        k.KO(-1,t,"􀄎");
      }
      else if(k.KFCM(6,t,['c','a','w','a','p','u'])){
        r=m=1;   // Line 252
        k.KDC(6,t);
        k.KO(-1,t,"􀄑");
      }
      else if(k.KFCM(6,t,['h','a','k','i','k','i'])){
        r=m=1;   // Line 272
        k.KDC(6,t);
        k.KO(-1,t,"􀄧");
      }
      else if(k.KFCM(6,t,['h','a','k','o','l','i'])){
        r=m=1;   // Line 273
        k.KDC(6,t);
        k.KO(-1,t,"􀄨");
      }
      else if(k.KFCM(6,t,['h','a','l','u','k','o'])){
        r=m=1;   // Line 274
        k.KDC(6,t);
        k.KO(-1,t,"􀄩");
      }
      else if(k.KFCM(6,t,['h','a','p','i','j','o'])){
        r=m=1;   // Line 276
        k.KDC(6,t);
        k.KO(-1,t,"􀄫");
      }
      else if(k.KFCM(6,t,['h','e','n','e','l','o'])){
        r=m=1;   // Line 281
        k.KDC(6,t);
        k.KO(-1,t,"􀄰");
      }
      else if(k.KFCM(6,t,['h','i','n','p','a','n'])){
        r=m=1;   // Line 282
        k.KDC(6,t);
        k.KO(-1,t,"􀄱");
      }
      else if(k.KFCM(6,t,['i','n','p','a','l','i'])){
        r=m=1;   // Line 300
        k.KDC(6,t);
        k.KO(-1,t,"􀉫");
      }
      else if(k.KFCM(6,t,['i','p','i','n','t','o'])){
        r=m=1;   // Line 303
        k.KDC(6,t);
        k.KO(-1,t,"􀅄");
      }
      else if(k.KFCM(6,t,['k','a','l','a','w','a'])){
        r=m=1;   // Line 323
        k.KDC(6,t);
        k.KO(-1,t,"􀅖");
      }
      else if(k.KFCM(6,t,['k','a','n','i','s','a'])){
        r=m=1;   // Line 326
        k.KDC(6,t);
        k.KO(-1,t,"􀅙");
      }
      else if(k.KFCM(6,t,['k','e','m','i','k','a'])){
        r=m=1;   // Line 334
        k.KDC(6,t);
        k.KO(-1,t,"􀅡");
      }
      else if(k.KFCM(6,t,['k','i','j','e','t','a'])){
        r=m=1;   // Line 337
        k.KDC(6,t);
        k.KO(-1,t,"􀅤");
      }
      else if(k.KFCM(6,t,['k','i','k','u','w','a'])){
        r=m=1;   // Line 340
        k.KDC(6,t);
        k.KO(-1,t,"􀅨");
      }
      else if(k.KFCM(6,t,['k','i','k','o','l','o'])){
        r=m=1;   // Line 341
        k.KDC(6,t);
        k.KO(-1,t,"􀅧");
      }
      else if(k.KFCM(6,t,['k','i','l','i','m','a'])){
        r=m=1;   // Line 342
        k.KDC(6,t);
        k.KO(-1,t,"􀅩");
      }
      else if(k.KFCM(6,t,['k','i','s','o','w','a'])){
        r=m=1;   // Line 345
        k.KDC(6,t);
        k.KO(-1,t,"􀅬");
      }
      else if(k.KFCM(6,t,['k','o','s','o','m','o'])){
        r=m=1;   // Line 356
        k.KDC(6,t);
        k.KO(-1,t,"􀅷");
      }
      else if(k.KFCM(6,t,['k','u','w','o','s','i'])){
        r=m=1;   // Line 369
        k.KDC(6,t);
        k.KO(-1,t,"􀆃");
      }
      else if(k.KFCM(6,t,['l','a','c','i','t','o'])){
        r=m=1;   // Line 371
        k.KDC(6,t);
        k.KO(-1,t,"􀆅");
      }
      else if(k.KFCM(6,t,['l','a','n','t','a','n'])){
        r=m=1;   // Line 378
        k.KDC(6,t);
        k.KO(-1,t,"􀆌");
      }
      else if(k.KFCM(6,t,['l','e','s','e','k','a'])){
        r=m=1;   // Line 383
        k.KDC(6,t);
        k.KO(-1,t,"􀆑");
      }
      else if(k.KFCM(6,t,['l','i','j','u','l','e'])){
        r=m=1;   // Line 385
        k.KDC(6,t);
        k.KO(-1,t,"􀆓");
      }
      else if(k.KFCM(6,t,['m','a','c','i','k','o'])){
        r=m=1;   // Line 400
        k.KDC(6,t);
        k.KO(-1,t,"􀆣");
      }
      else if(k.KFCM(6,t,['m','a','m','a','k','i'])){
        r=m=1;   // Line 405
        k.KDC(6,t);
        k.KO(-1,t,"􀆨");
      }
      else if(k.KFCM(6,t,['m','a','t','i','j','a'])){
        r=m=1;   // Line 407
        k.KDC(6,t);
        k.KO(-1,t,"􀆪");
      }
      else if(k.KFCM(6,t,['m','a','t','u','w','a'])){
        r=m=1;   // Line 409
        k.KDC(6,t);
        k.KO(-1,t,"􀆬");
      }
      else if(k.KFCM(6,t,['m','i','j','a','l','o'])){
        r=m=1;   // Line 419
        k.KDC(6,t);
        k.KO(-1,t,"􀆶");
      }
      else if(k.KFCM(6,t,['m','u','w','e','s','i'])){
        r=m=1;   // Line 429
        k.KDC(6,t);
        k.KO(-1,t,"􀇀");
      }
      else if(k.KFCM(6,t,['n','a','m','u','n','a'])){
        r=m=1;   // Line 436
        k.KDC(6,t);
        k.KO(-1,t,"􀇆");
      }
      else if(k.KFCM(6,t,['n','a','n','k','i','n'])){
        r=m=1;   // Line 438
        k.KDC(6,t);
        k.KO(-1,t,"􀇈");
      }
      else if(k.KFCM(6,t,['p','a','n','s','i','n'])){
        r=m=1;   // Line 476
        k.KDC(6,t);
        k.KO(-1,t,"􀇭");
      }
      else if(k.KFCM(6,t,['p','e','l','e','t','e'])){
        r=m=1;   // Line 486
        k.KDC(6,t);
        k.KO(-1,t,"􀇷");
      }
      else if(k.KFCM(6,t,['p','i','c','i','j','o'])){
        r=m=1;   // Line 495
        k.KDC(6,t);
        k.KO(-1,t,"􀈁");
      }
      else if(k.KFCM(6,t,['p','o','l','o','k','o'])){
        r=m=1;   // Line 502
        k.KDC(6,t);
        k.KO(-1,t,"􀈉");
      }
      else if(k.KFCM(6,t,['p','o','l','o','t','a'])){
        r=m=1;   // Line 504
        k.KDC(6,t);
        k.KO(-1,t,"􀈋");
      }
      else if(k.KFCM(6,t,['p','o','w','e','l','e'])){
        r=m=1;   // Line 506
        k.KDC(6,t);
        k.KO(-1,t,"􀉾");
      }
      else if(k.KFCM(6,t,['p','u','l','u','s','i'])){
        r=m=1;   // Line 512
        k.KDC(6,t);
        k.KO(-1,t,"􀈓");
      }
      else if(k.KFCM(6,t,['s','a','l','i','l','a'])){
        r=m=1;   // Line 515
        k.KDC(6,t);
        k.KO(-1,t,"􀈕");
      }
      else if(k.KFCM(6,t,['s','a','n','k','a','n'])){
        r=m=1;   // Line 519
        k.KDC(6,t);
        k.KO(-1,t,"􀈚");
      }
      else if(k.KFCM(6,t,['s','a','p','o','l','e'])){
        r=m=1;   // Line 522
        k.KDC(6,t);
        k.KO(-1,t,"􀈝");
      }
      else if(k.KFCM(6,t,['s','a','t','i','l','u'])){
        r=m=1;   // Line 524
        k.KDC(6,t);
        k.KO(-1,t,"􀈟");
      }
      else if(k.KFCM(6,t,['s','e','k','a','n','u'])){
        r=m=1;   // Line 527
        k.KDC(6,t);
        k.KO(-1,t,"􀈢");
      }
      else if(k.KFCM(6,t,['s','i','t','i','j','a'])){
        r=m=1;   // Line 539
        k.KDC(6,t);
        k.KO(-1,t,"􀈭");
      }
      else if(k.KFCM(6,t,['s','u','n','a','j','a'])){
        r=m=1;   // Line 549
        k.KDC(6,t);
        k.KO(-1,t,"􀈷");
      }
      else if(k.KFCM(6,t,['s','u','n','k','a','n'])){
        r=m=1;   // Line 550
        k.KDC(6,t);
        k.KO(-1,t,"􀈸");
      }
      else if(k.KFCM(6,t,['s','u','w','i','n','a'])){
        r=m=1;   // Line 551
        k.KDC(6,t);
        k.KO(-1,t,"􀈹");
      }
      else if(k.KFCM(6,t,['t','a','j','a','l','i'])){
        r=m=1;   // Line 553
        k.KDC(6,t);
        k.KO(-1,t,"􀈻");
      }
      else if(k.KFCM(6,t,['t','a','k','a','h','a'])){
        r=m=1;   // Line 555
        k.KDC(6,t);
        k.KO(-1,t,"􀈽");
      }
      else if(k.KFCM(6,t,['t','a','k','i','l','o'])){
        r=m=1;   // Line 556
        k.KDC(6,t);
        k.KO(-1,t,"􀈾");
      }
      else if(k.KFCM(6,t,['t','a','l','i','k','a'])){
        r=m=1;   // Line 557
        k.KDC(6,t);
        k.KO(-1,t,"􀈿");
      }
      else if(k.KFCM(6,t,['t','a','l','i','l','i'])){
        r=m=1;   // Line 558
        k.KDC(6,t);
        k.KO(-1,t,"􀉀");
      }
      else if(k.KFCM(6,t,['t','a','m','a','k','a'])){
        r=m=1;   // Line 560
        k.KDC(6,t);
        k.KO(-1,t,"􀉂");
      }
      else if(k.KFCM(6,t,['t','a','p','a','l','a'])){
        r=m=1;   // Line 563
        k.KDC(6,t);
        k.KO(-1,t,"􀉅");
      }
      else if(k.KFCM(6,t,['t','a','s','u','w','i'])){
        r=m=1;   // Line 565
        k.KDC(6,t);
        k.KO(-1,t,"􀉇");
      }
      else if(k.KFCM(6,t,['t','a','w','a','w','a'])){
        r=m=1;   // Line 567
        k.KDC(6,t);
        k.KO(-1,t,"􀉽");
      }
      else if(k.KFCM(6,t,['t','e','n','e','m','e'])){
        r=m=1;   // Line 573
        k.KDC(6,t);
        k.KO(-1,t,"􀉏");
      }
      else if(k.KFCM(6,t,['t','o','m','i','w','a'])){
        r=m=1;   // Line 584
        k.KDC(6,t);
        k.KO(-1,t,"􀉛");
      }
      else if(k.KFCM(6,t,['t','u','n','t','a','n'])){
        r=m=1;   // Line 593
        k.KDC(6,t);
        k.KO(-1,t,"􀉣");
      }
      else if(k.KFCM(6,t,['u','l','o','k','a','n'])){
        r=m=1;   // Line 598
        k.KDC(6,t);
        k.KO(-1,t,"􀉤");
      }
      else if(k.KFCM(6,t,['w','o','n','p','a','2'])){
        r=m=1;   // Line 617
        k.KDC(6,t);
        k.KO(-1,t,"􀌛");
      }
      else if(k.KFCM(6,t,['k','o','k','a','n','u'])){
        r=m=1;   // Line 629
        k.KDC(6,t);
        k.KO(-1,t,"􀋿");
      }
      else if(k.KFCM(6,t,['K','o','k','a','n','u'])){
        r=m=1;   // Line 630
        k.KDC(6,t);
        k.KO(-1,t,"􀋿");
      }
      else if(k.KFCM(5,t,['a','k','a','l','a'])){
        r=m=1;   // Line 236
        k.KDC(5,t);
        k.KO(-1,t,"􀄀");
      }
      else if(k.KFCM(5,t,['a','k','a','s','a'])){
        r=m=1;   // Line 237
        k.KDC(5,t);
        k.KO(-1,t,"􀄁");
      }
      else if(k.KFCM(5,t,['a','p','a','k','i'])){
        r=m=1;   // Line 246
        k.KDC(5,t);
        k.KO(-1,t,"􀄋");
      }
      else if(k.KFCM(5,t,['a','s','e','t','e'])){
        r=m=1;   // Line 248
        k.KDC(5,t);
        k.KO(-1,t,"􀄍");
      }
      else if(k.KFCM(5,t,['c','a','n','w','a'])){
        r=m=1;   // Line 251
        k.KDC(5,t);
        k.KO(-1,t,"􀄐");
      }
      else if(k.KFCM(5,t,['c','e','n','c','i'])){
        r=m=1;   // Line 255
        k.KDC(5,t);
        k.KO(-1,t,"􀄔");
      }
      else if(k.KFCM(5,t,['c','e','n','p','o'])){
        r=m=1;   // Line 256
        k.KDC(5,t);
        k.KO(-1,t,"􀄕");
      }
      else if(k.KFCM(5,t,['c','o','n','t','o'])){
        r=m=1;   // Line 262
        k.KDC(5,t);
        k.KO(-1,t,"􀄛");
      }
      else if(k.KFCM(5,t,['c','o','n','c','a'])){
        r=m=1;   // Line 263
        k.KDC(5,t);
        k.KO(-1,t,"􀄜");
      }
      else if(k.KFCM(5,t,['c','o','n','p','u'])){
        r=m=1;   // Line 266
        k.KDC(5,t);
        k.KO(-1,t,"􀄟");
      }
      if(m) {}
      else if(k.KFCM(5,t,['h','o','n','j','a'])){
        r=m=1;   // Line 284
        k.KDC(5,t);
        k.KO(-1,t,"􀄳");
      }
      else if(k.KFCM(5,t,['h','o','t','o','n'])){
        r=m=1;   // Line 285
        k.KDC(5,t);
        k.KO(-1,t,"􀄴");
      }
      else if(k.KFCM(5,t,['h','u','k','u','n'])){
        r=m=1;   // Line 287
        k.KDC(5,t);
        k.KO(-1,t,"􀄶");
      }
      else if(k.KFCM(5,t,['h','u','n','s','i'])){
        r=m=1;   // Line 288
        k.KDC(5,t);
        k.KO(-1,t,"􀄷");
      }
      else if(k.KFCM(5,t,['i','h','a','m','o'])){
        r=m=1;   // Line 292
        k.KDC(5,t);
        k.KO(-1,t,"􀄻");
      }
      else if(k.KFCM(5,t,['i','k','a','m','a'])){
        r=m=1;   // Line 293
        k.KDC(5,t);
        k.KO(-1,t,"􀄼");
      }
      else if(k.KFCM(5,t,['i','k','a','s','i'])){
        r=m=1;   // Line 294
        k.KDC(5,t);
        k.KO(-1,t,"􀄽");
      }
      else if(k.KFCM(5,t,['i','n','a','l','o'])){
        r=m=1;   // Line 298
        k.KDC(5,t);
        k.KO(-1,t,"􀅁");
      }
      else if(k.KFCM(5,t,['i','p','u','w','e'])){
        r=m=1;   // Line 305
        k.KDC(5,t);
        k.KO(-1,t,"􀅅");
      }
      else if(k.KFCM(5,t,['j','a','m','i','n'])){
        r=m=1;   // Line 308
        k.KDC(5,t);
        k.KO(-1,t,"􀅈");
      }
      else if(k.KFCM(5,t,['j','a','n','l','u'])){
        r=m=1;   // Line 310
        k.KDC(5,t);
        k.KO(-1,t,"􀅊");
      }
      else if(k.KFCM(5,t,['j','a','t','a','n'])){
        r=m=1;   // Line 311
        k.KDC(5,t);
        k.KO(-1,t,"􀅋");
      }
      else if(k.KFCM(5,t,['k','a','l','a','n'])){
        r=m=1;   // Line 322
        k.KDC(5,t);
        k.KO(-1,t,"􀅕");
      }
      else if(k.KFCM(5,t,['k','a','n','t','a'])){
        r=m=1;   // Line 327
        k.KDC(5,t);
        k.KO(-1,t,"􀅚");
      }
      else if(k.KFCM(5,t,['k','a','p','a','n'])){
        r=m=1;   // Line 328
        k.KDC(5,t);
        k.KO(-1,t,"􀅛");
      }
      else if(k.KFCM(5,t,['k','a','t','i','n'])){
        r=m=1;   // Line 331
        k.KDC(5,t);
        k.KO(-1,t,"􀅞");
      }
      else if(k.KFCM(5,t,['k','e','n','c','a'])){
        r=m=1;   // Line 335
        k.KDC(5,t);
        k.KO(-1,t,"􀅢");
      }
      else if(k.KFCM(5,t,['k','o','m','a','n'])){
        r=m=1;   // Line 347
        k.KDC(5,t);
        k.KO(-1,t,"􀅮");
      }
      else if(k.KFCM(5,t,['k','o','n','c','o'])){
        r=m=1;   // Line 348
        k.KDC(5,t);
        k.KO(-1,t,"􀅯");
      }
      else if(k.KFCM(5,t,['k','o','n','e','n'])){
        r=m=1;   // Line 349
        k.KDC(5,t);
        k.KO(-1,t,"􀅰");
      }
      else if(k.KFCM(5,t,['k','o','n','j','e'])){
        r=m=1;   // Line 350
        k.KDC(5,t);
        k.KO(-1,t,"􀅱");
      }
      else if(k.KFCM(5,t,['k','o','n','p','a'])){
        r=m=1;   // Line 352
        k.KDC(5,t);
        k.KO(-1,t,"􀅳");
      }
      else if(k.KFCM(5,t,['k','o','s','a','n'])){
        r=m=1;   // Line 355
        k.KDC(5,t);
        k.KO(-1,t,"􀅶");
      }
      else if(k.KFCM(5,t,['k','u','m','o','n'])){
        r=m=1;   // Line 362
        k.KDC(5,t);
        k.KO(-1,t,"􀅽");
      }
      else if(k.KFCM(5,t,['k','u','w','a','n'])){
        r=m=1;   // Line 366
        k.KDC(5,t);
        k.KO(-1,t,"􀆁");
      }
      else if(k.KFCM(5,t,['l','a','n','k','i'])){
        r=m=1;   // Line 376
        k.KDC(5,t);
        k.KO(-1,t,"􀆊");
      }
      else if(k.KFCM(5,t,['l','a','n','s','a'])){
        r=m=1;   // Line 377
        k.KDC(5,t);
        k.KO(-1,t,"􀆋");
      }
      else if(k.KFCM(5,t,['l','e','k','i','n'])){
        r=m=1;   // Line 380
        k.KDC(5,t);
        k.KO(-1,t,"􀆎");
      }
      else if(k.KFCM(5,t,['l','e','n','k','a'])){
        r=m=1;   // Line 382
        k.KDC(5,t);
        k.KO(-1,t,"􀆐");
      }
      else if(k.KFCM(5,t,['l','i','p','a','n'])){
        r=m=1;   // Line 388
        k.KDC(5,t);
        k.KO(-1,t,"􀆖");
      }
      else if(k.KFCM(5,t,['l','u','n','t','i'])){
        r=m=1;   // Line 398
        k.KDC(5,t);
        k.KO(-1,t,"􀆡");
      }
      else if(k.KFCM(5,t,['m','a','c','u','n'])){
        r=m=1;   // Line 401
        k.KDC(5,t);
        k.KO(-1,t,"􀆤");
      }
      else if(k.KFCM(5,t,['m','a','k','a','n'])){
        r=m=1;   // Line 402
        k.KDC(5,t);
        k.KO(-1,t,"􀆥");
      }
      else if(k.KFCM(5,t,['m','a','t','i','n'])){
        r=m=1;   // Line 408
        k.KDC(5,t);
        k.KO(-1,t,"􀆫");
      }
      else if(k.KFCM(5,t,['m','e','l','o','n'])){
        r=m=1;   // Line 411
        k.KDC(5,t);
        k.KO(-1,t,"􀆮");
      }
      else if(k.KFCM(5,t,['m','e','n','w','o'])){
        r=m=1;   // Line 414
        k.KDC(5,t);
        k.KO(-1,t,"􀆱");
      }
      else if(k.KFCM(5,t,['m','i','c','i','n'])){
        r=m=1;   // Line 418
        k.KDC(5,t);
        k.KO(-1,t,"􀆵");
      }
      else if(k.KFCM(5,t,['m','u','n','c','u'])){
        r=m=1;   // Line 426
        k.KDC(5,t);
        k.KO(-1,t,"􀆽");
      }
      else if(k.KFCM(5,t,['n','a','k','i','2'])){
        r=m=1;   // Line 432
        k.KDC(5,t);
        k.KO(-1,t,"􀌔");
      }
      else if(k.KFCM(5,t,['n','a','l','a','n'])){
        r=m=1;   // Line 433
        k.KDC(5,t);
        k.KO(-1,t,"􀇃");
      }
      else if(k.KFCM(5,t,['n','a','s','e','2'])){
        r=m=1;   // Line 441
        k.KDC(5,t);
        k.KO(-1,t,"􀇋");
      }
      else if(k.KFCM(5,t,['n','e','n','k','a'])){
        r=m=1;   // Line 445
        k.KDC(5,t);
        k.KO(-1,t,"􀇏");
      }
      else if(k.KFCM(5,t,['o','c','o','t','a'])){
        r=m=1;   // Line 457
        k.KDC(5,t);
        k.KO(-1,t,"􀇛");
      }
      else if(k.KFCM(5,t,['o','k','u','t','u'])){
        r=m=1;   // Line 459
        k.KDC(5,t);
        k.KO(-1,t,"􀇝");
      }
      else if(k.KFCM(5,t,['o','n','i','n','2'])){
        r=m=1;   // Line 461
        k.KDC(5,t);
        k.KO(-1,t,"􀌖");
      }
      else if(k.KFCM(5,t,['o','n','t','o','n'])){
        r=m=1;   // Line 463
        k.KDC(5,t);
        k.KO(-1,t,"􀇠");
      }
      else if(k.KFCM(5,t,['o','p','o','k','i'])){
        r=m=1;   // Line 464
        k.KDC(5,t);
        k.KO(-1,t,"􀇡");
      }
      else if(k.KFCM(5,t,['o','p','o','t','u'])){
        r=m=1;   // Line 465
        k.KDC(5,t);
        k.KO(-1,t,"􀇢");
      }
      else if(k.KFCM(5,t,['o','s','o','l','e'])){
        r=m=1;   // Line 467
        k.KDC(5,t);
        k.KO(-1,t,"􀇤");
      }
      else if(k.KFCM(5,t,['o','t','a','w','e'])){
        r=m=1;   // Line 468
        k.KDC(5,t);
        k.KO(-1,t,"􀇥");
      }
      else if(k.KFCM(5,t,['p','a','j','a','n'])){
        r=m=1;   // Line 471
        k.KDC(5,t);
        k.KO(-1,t,"􀇨");
      }
      else if(k.KFCM(5,t,['p','a','n','l','i'])){
        r=m=1;   // Line 475
        k.KDC(5,t);
        k.KO(-1,t,"􀇬");
      }
      else if(k.KFCM(5,t,['p','a','n','t','a'])){
        r=m=1;   // Line 477
        k.KDC(5,t);
        k.KO(-1,t,"􀇮");
      }
      else if(k.KFCM(5,t,['p','a','p','o','n'])){
        r=m=1;   // Line 478
        k.KDC(5,t);
        k.KO(-1,t,"􀇯");
      }
      else if(k.KFCM(5,t,['p','a','s','a','n'])){
        r=m=1;   // Line 479
        k.KDC(5,t);
        k.KO(-1,t,"􀇰");
      }
      else if(k.KFCM(5,t,['p','a','t','u','n'])){
        r=m=1;   // Line 482
        k.KDC(5,t);
        k.KO(-1,t,"􀇳");
      }
      else if(k.KFCM(5,t,['p','e','m','a','n'])){
        r=m=1;   // Line 487
        k.KDC(5,t);
        k.KO(-1,t,"􀇸");
      }
      else if(k.KFCM(5,t,['p','e','n','p','e'])){
        r=m=1;   // Line 489
        k.KDC(5,t);
        k.KO(-1,t,"􀇺");
      }
      else if(k.KFCM(5,t,['p','i','j','e','n'])){
        r=m=1;   // Line 494
        k.KDC(5,t);
        k.KO(-1,t,"􀈀");
      }
      else if(k.KFCM(5,t,['p','i','n','k','o'])){
        r=m=1;   // Line 498
        k.KDC(5,t);
        k.KO(-1,t,"􀈅");
      }
      else if(k.KFCM(5,t,['p','i','n','t','u'])){
        r=m=1;   // Line 499
        k.KDC(5,t);
        k.KO(-1,t,"􀈆");
      }
      else if(k.KFCM(5,t,['p','o','l','a','n'])){
        r=m=1;   // Line 501
        k.KDC(5,t);
        k.KO(-1,t,"􀈈");
      }
      else if(k.KFCM(5,t,['p','u','c','o','n'])){
        r=m=1;   // Line 508
        k.KDC(5,t);
        k.KO(-1,t,"􀈍");
      }
      else if(k.KFCM(5,t,['s','a','m','a','n'])){
        r=m=1;   // Line 516
        k.KDC(5,t);
        k.KO(-1,t,"􀈖");
      }
      else if(k.KFCM(5,t,['s','a','n','t','i'])){
        r=m=1;   // Line 520
        k.KDC(5,t);
        k.KO(-1,t,"􀈛");
      }
      else if(k.KFCM(5,t,['s','e','p','o','2'])){
        r=m=1;   // Line 530
        k.KDC(5,t);
        k.KO(-1,t,"􀈤");
      }
      else if(k.KFCM(5,t,['s','i','j','e','n'])){
        r=m=1;   // Line 531
        k.KDC(5,t);
        k.KO(-1,t,"􀈦");
      }
      else if(k.KFCM(5,t,['s','i','k','i','n'])){
        r=m=1;   // Line 532
        k.KDC(5,t);
        k.KO(-1,t,"􀈧");
      }
      else if(k.KFCM(5,t,['s','i','n','s','i'])){
        r=m=1;   // Line 537
        k.KDC(5,t);
        k.KO(-1,t,"􀈫");
      }
      else if(k.KFCM(5,t,['t','a','j','e','n'])){
        r=m=1;   // Line 554
        k.KDC(5,t);
        k.KO(-1,t,"􀈼");
      }
      else if(k.KFCM(5,t,['t','a','l','u','n'])){
        r=m=1;   // Line 559
        k.KDC(5,t);
        k.KO(-1,t,"􀉁");
      }
      else if(k.KFCM(5,t,['t','a','m','i','n'])){
        r=m=1;   // Line 561
        k.KDC(5,t);
        k.KO(-1,t,"􀉃");
      }
      else if(k.KFCM(5,t,['t','a','s','o','n'])){
        r=m=1;   // Line 564
        k.KDC(5,t);
        k.KO(-1,t,"􀉆");
      }
      else if(k.KFCM(5,t,['t','e','n','j','a'])){
        r=m=1;   // Line 574
        k.KDC(5,t);
        k.KO(-1,t,"􀉐");
      }
      else if(k.KFCM(5,t,['t','i','n','k','i'])){
        r=m=1;   // Line 580
        k.KDC(5,t);
        k.KO(-1,t,"􀉲");
      }
      else if(k.KFCM(5,t,['t','i','t','a','n'])){
        r=m=1;   // Line 582
        k.KDC(5,t);
        k.KO(-1,t,"􀉴");
      }
      else if(k.KFCM(5,t,['t','o','n','k','o'])){
        r=m=1;   // Line 586
        k.KDC(5,t);
        k.KO(-1,t,"􀉜");
      }
      else if(k.KFCM(5,t,['u','j','a','n','u'])){
        r=m=1;   // Line 594
        k.KDC(5,t);
        k.KO(-1,t,"􀉗");
      }
      else if(k.KFCM(5,t,['u','k','a','m','a'])){
        r=m=1;   // Line 595
        k.KDC(5,t);
        k.KO(-1,t,"􀉦");
      }
      else if(k.KFCM(5,t,['u','k','i','k','i'])){
        r=m=1;   // Line 596
        k.KDC(5,t);
        k.KO(-1,t,"􀉘");
      }
      else if(k.KFCM(5,t,['u','m','a','m','i'])){
        r=m=1;   // Line 599
        k.KDC(5,t);
        k.KO(-1,t,"􀉥");
      }
      else if(k.KFCM(5,t,['u','n','i','t','u'])){
        r=m=1;   // Line 602
        k.KDC(5,t);
        k.KO(-1,t,"􀉨");
      }
      else if(k.KFCM(5,t,['u','s','e','n','2'])){
        r=m=1;   // Line 604
        k.KDC(5,t);
        k.KO(-1,t,"􀉮");
      }
      else if(k.KFCM(5,t,['w','a','t','a','n'])){
        r=m=1;   // Line 607
        k.KDC(5,t);
        k.KO(-1,t,"􀉊");
      }
      else if(k.KFCM(5,t,['w','i','s','a','n'])){
        r=m=1;   // Line 608
        k.KDC(5,t);
        k.KO(-1,t,"􀉖");
      }
      else if(k.KFCM(5,t,['w','a','n','k','u'])){
        r=m=1;   // Line 609
        k.KDC(5,t);
        k.KO(-1,t,"􀉪");
      }
      else if(k.KFCM(5,t,['w','o','n','p','a'])){
        r=m=1;   // Line 616
        k.KDC(5,t);
        k.KO(-1,t,"􀉼");
      }
      else if(k.KFCM(4,t,['a','n','a','n'])){
        r=m=1;   // Line 240
        k.KDC(4,t);
        k.KO(-1,t,"􀄅");
      }
      else if(k.KFCM(4,t,['c','a','n','u'])){
        r=m=1;   // Line 250
        k.KDC(4,t);
        k.KO(-1,t,"􀄏");
      }
      else if(k.KFCM(4,t,['c','e','k','e'])){
        r=m=1;   // Line 253
        k.KDC(4,t);
        k.KO(-1,t,"􀄒");
      }
      else if(k.KFCM(4,t,['c','e','l','e'])){
        r=m=1;   // Line 254
        k.KDC(4,t);
        k.KO(-1,t,"􀄓");
      }
      else if(k.KFCM(4,t,['c','i','m','i'])){
        r=m=1;   // Line 258
        k.KDC(4,t);
        k.KO(-1,t,"􀄗");
      }
      else if(k.KFCM(4,t,['c','i','n','a'])){
        r=m=1;   // Line 259
        k.KDC(4,t);
        k.KO(-1,t,"􀄘");
      }
      else if(k.KFCM(4,t,['c','o','h','i'])){
        r=m=1;   // Line 260
        k.KDC(4,t);
        k.KO(-1,t,"􀄙");
      }
      else if(k.KFCM(4,t,['c','u','m','a'])){
        r=m=1;   // Line 264
        k.KDC(4,t);
        k.KO(-1,t,"􀄝");
      }
      else if(k.KFCM(4,t,['c','u','n','e'])){
        r=m=1;   // Line 265
        k.KDC(4,t);
        k.KO(-1,t,"􀄞");
      }
      else if(k.KFCM(4,t,['c','u','w','i'])){
        r=m=1;   // Line 267
        k.KDC(4,t);
        k.KO(-1,t,"􀄠");
      }
      else if(k.KFCM(4,t,['e','w','i','n'])){
        r=m=1;   // Line 270
        k.KDC(4,t);
        k.KO(-1,t,"􀄤");
      }
      else if(k.KFCM(4,t,['h','a','j','a'])){
        r=m=1;   // Line 271
        k.KDC(4,t);
        k.KO(-1,t,"􀄦");
      }
      else if(k.KFCM(4,t,['h','a','s','o'])){
        r=m=1;   // Line 277
        k.KDC(4,t);
        k.KO(-1,t,"􀄬");
      }
      if(m) {}
      else if(k.KFCM(4,t,['h','e','l','a'])){
        r=m=1;   // Line 279
        k.KDC(4,t);
        k.KO(-1,t,"􀄮");
      }
      else if(k.KFCM(4,t,['h','u','s','u'])){
        r=m=1;   // Line 289
        k.KDC(4,t);
        k.KO(-1,t,"􀄸");
      }
      else if(k.KFCM(4,t,['h','u','w','a'])){
        r=m=1;   // Line 290
        k.KDC(4,t);
        k.KO(-1,t,"􀄹");
      }
      else if(k.KFCM(4,t,['i','m','a','n'])){
        r=m=1;   // Line 296
        k.KDC(4,t);
        k.KO(-1,t,"􀄿");
      }
      else if(k.KFCM(4,t,['i','n','s','u'])){
        r=m=1;   // Line 302
        k.KDC(4,t);
        k.KO(-1,t,"􀅃");
      }
      else if(k.KFCM(4,t,['j','a','t','i'])){
        r=m=1;   // Line 312
        k.KDC(4,t);
        k.KO(-1,t,"􀅌");
      }
      else if(k.KFCM(4,t,['j','o','l','i'])){
        r=m=1;   // Line 314
        k.KDC(4,t);
        k.KO(-1,t,"􀅎");
      }
      else if(k.KFCM(4,t,['j','o','n','e'])){
        r=m=1;   // Line 316
        k.KDC(4,t);
        k.KO(-1,t,"􀅐");
      }
      else if(k.KFCM(4,t,['j','u','k','a'])){
        r=m=1;   // Line 318
        k.KDC(4,t);
        k.KO(-1,t,"􀅒");
      }
      else if(k.KFCM(4,t,['j','u','t','u'])){
        r=m=1;   // Line 319
        k.KDC(4,t);
        k.KO(-1,t,"􀈄");
      }
      else if(k.KFCM(4,t,['k','a','k','i'])){
        r=m=1;   // Line 321
        k.KDC(4,t);
        k.KO(-1,t,"􀅔");
      }
      else if(k.KFCM(4,t,['k','a','l','i'])){
        r=m=1;   // Line 324
        k.KDC(4,t);
        k.KO(-1,t,"􀅗");
      }
      else if(k.KFCM(4,t,['k','a','p','u'])){
        r=m=1;   // Line 329
        k.KDC(4,t);
        k.KO(-1,t,"􀅜");
      }
      else if(k.KFCM(4,t,['k','a','t','e'])){
        r=m=1;   // Line 330
        k.KDC(4,t);
        k.KO(-1,t,"􀅝");
      }
      else if(k.KFCM(4,t,['k','a','w','a'])){
        r=m=1;   // Line 332
        k.KDC(4,t);
        k.KO(-1,t,"􀅟");
      }
      else if(k.KFCM(4,t,['k','e','l','a'])){
        r=m=1;   // Line 333
        k.KDC(4,t);
        k.KO(-1,t,"􀅠");
      }
      else if(k.KFCM(4,t,['k','i','j','u'])){
        r=m=1;   // Line 338
        k.KDC(4,t);
        k.KO(-1,t,"􀅥");
      }
      else if(k.KFCM(4,t,['k','i','k','e'])){
        r=m=1;   // Line 339
        k.KDC(4,t);
        k.KO(-1,t,"􀅦");
      }
      else if(k.KFCM(4,t,['k','i','s','a'])){
        r=m=1;   // Line 344
        k.KDC(4,t);
        k.KO(-1,t,"􀅫");
      }
      else if(k.KFCM(4,t,['k','o','t','a'])){
        r=m=1;   // Line 357
        k.KDC(4,t);
        k.KO(-1,t,"􀅸");
      }
      else if(k.KFCM(4,t,['k','u','j','o'])){
        r=m=1;   // Line 358
        k.KDC(4,t);
        k.KO(-1,t,"􀅹");
      }
      else if(k.KFCM(4,t,['k','u','k','u'])){
        r=m=1;   // Line 359
        k.KDC(4,t);
        k.KO(-1,t,"􀅺");
      }
      else if(k.KFCM(4,t,['k','u','l','a'])){
        r=m=1;   // Line 360
        k.KDC(4,t);
        k.KO(-1,t,"􀅻");
      }
      else if(k.KFCM(4,t,['k','u','m','i'])){
        r=m=1;   // Line 361
        k.KDC(4,t);
        k.KO(-1,t,"􀅼");
      }
      else if(k.KFCM(4,t,['k','u','s','a'])){
        r=m=1;   // Line 364
        k.KDC(4,t);
        k.KO(-1,t,"􀅿");
      }
      else if(k.KFCM(4,t,['k','u','t','o'])){
        r=m=1;   // Line 365
        k.KDC(4,t);
        k.KO(-1,t,"􀆀");
      }
      else if(k.KFCM(4,t,['l','a','h','a'])){
        r=m=1;   // Line 372
        k.KDC(4,t);
        k.KO(-1,t,"􀆆");
      }
      else if(k.KFCM(4,t,['l','a','k','i'])){
        r=m=1;   // Line 373
        k.KDC(4,t);
        k.KO(-1,t,"􀆇");
      }
      else if(k.KFCM(4,t,['l','a','m','o'])){
        r=m=1;   // Line 374
        k.KDC(4,t);
        k.KO(-1,t,"􀆈");
      }
      else if(k.KFCM(4,t,['l','i','j','e'])){
        r=m=1;   // Line 384
        k.KDC(4,t);
        k.KO(-1,t,"􀆒");
      }
      else if(k.KFCM(4,t,['l','i','k','a'])){
        r=m=1;   // Line 386
        k.KDC(4,t);
        k.KO(-1,t,"􀆔");
      }
      else if(k.KFCM(4,t,['l','i','l','i'])){
        r=m=1;   // Line 387
        k.KDC(4,t);
        k.KO(-1,t,"􀉿");
      }
      else if(k.KFCM(4,t,['l','i','p','u'])){
        r=m=1;   // Line 390
        k.KDC(4,t);
        k.KO(-1,t,"􀆙");
      }
      else if(k.KFCM(4,t,['l','i','s','i'])){
        r=m=1;   // Line 391
        k.KDC(4,t);
        k.KO(-1,t,"􀆚");
      }
      else if(k.KFCM(4,t,['l','i','t','o'])){
        r=m=1;   // Line 392
        k.KDC(4,t);
        k.KO(-1,t,"􀆛");
      }
      else if(k.KFCM(4,t,['m','o','n','a'])){
        r=m=1;   // Line 394
        k.KDC(4,t);
        k.KO(-1,t,"􀆝");
      }
      else if(k.KFCM(4,t,['l','o','s','o'])){
        r=m=1;   // Line 395
        k.KDC(4,t);
        k.KO(-1,t,"􀆞");
      }
      else if(k.KFCM(4,t,['l','u','k','a'])){
        r=m=1;   // Line 396
        k.KDC(4,t);
        k.KO(-1,t,"􀆟");
      }
      else if(k.KFCM(4,t,['l','u','w','a'])){
        r=m=1;   // Line 399
        k.KDC(4,t);
        k.KO(-1,t,"􀆢");
      }
      else if(k.KFCM(4,t,['m','a','k','u'])){
        r=m=1;   // Line 403
        k.KDC(4,t);
        k.KO(-1,t,"􀆦");
      }
      else if(k.KFCM(4,t,['m','a','l','o'])){
        r=m=1;   // Line 404
        k.KDC(4,t);
        k.KO(-1,t,"􀆧");
      }
      else if(k.KFCM(4,t,['m','a','n','i'])){
        r=m=1;   // Line 406
        k.KDC(4,t);
        k.KO(-1,t,"􀆩");
      }
      else if(k.KFCM(4,t,['m','e','j','a'])){
        r=m=1;   // Line 410
        k.KDC(4,t);
        k.KO(-1,t,"􀆭");
      }
      else if(k.KFCM(4,t,['m','e','n','u'])){
        r=m=1;   // Line 413
        k.KDC(4,t);
        k.KO(-1,t,"􀆰");
      }
      else if(k.KFCM(4,t,['m','e','p','u'])){
        r=m=1;   // Line 415
        k.KDC(4,t);
        k.KO(-1,t,"􀆲");
      }
      else if(k.KFCM(4,t,['m','e','s','e'])){
        r=m=1;   // Line 416
        k.KDC(4,t);
        k.KO(-1,t,"􀆳");
      }
      else if(k.KFCM(4,t,['m','i','t','a'])){
        r=m=1;   // Line 420
        k.KDC(4,t);
        k.KO(-1,t,"􀆷");
      }
      else if(k.KFCM(4,t,['m','o','m','u'])){
        r=m=1;   // Line 421
        k.KDC(4,t);
        k.KO(-1,t,"􀆸");
      }
      else if(k.KFCM(4,t,['m','o','t','o'])){
        r=m=1;   // Line 422
        k.KDC(4,t);
        k.KO(-1,t,"􀆹");
      }
      else if(k.KFCM(4,t,['m','u','k','u'])){
        r=m=1;   // Line 424
        k.KDC(4,t);
        k.KO(-1,t,"􀆻");
      }
      else if(k.KFCM(4,t,['m','u','l','u'])){
        r=m=1;   // Line 425
        k.KDC(4,t);
        k.KO(-1,t,"􀆼");
      }
      else if(k.KFCM(4,t,['m','u','s','i'])){
        r=m=1;   // Line 427
        k.KDC(4,t);
        k.KO(-1,t,"􀆾");
      }
      else if(k.KFCM(4,t,['n','a','k','i'])){
        r=m=1;   // Line 431
        k.KDC(4,t);
        k.KO(-1,t,"􀇂");
      }
      else if(k.KFCM(4,t,['n','a','m','u'])){
        r=m=1;   // Line 435
        k.KDC(4,t);
        k.KO(-1,t,"􀇅");
      }
      else if(k.KFCM(4,t,['n','a','p','a'])){
        r=m=1;   // Line 439
        k.KDC(4,t);
        k.KO(-1,t,"􀇊");
      }
      else if(k.KFCM(4,t,['n','a','s','e'])){
        r=m=1;   // Line 440
        k.KDC(4,t);
        k.KO(-1,t,"􀌁");
      }
      else if(k.KFCM(4,t,['n','e','j','e'])){
        r=m=1;   // Line 443
        k.KDC(4,t);
        k.KO(-1,t,"􀇍");
      }
      else if(k.KFCM(4,t,['n','e','l','o'])){
        r=m=1;   // Line 444
        k.KDC(4,t);
        k.KO(-1,t,"􀇎");
      }
      else if(k.KFCM(4,t,['n','e','p','a'])){
        r=m=1;   // Line 446
        k.KDC(4,t);
        k.KO(-1,t,"􀇐");
      }
      else if(k.KFCM(4,t,['n','e','s','o'])){
        r=m=1;   // Line 447
        k.KDC(4,t);
        k.KO(-1,t,"􀇑");
      }
      else if(k.KFCM(4,t,['n','i','j','u'])){
        r=m=1;   // Line 448
        k.KDC(4,t);
        k.KO(-1,t,"􀇒");
      }
      else if(k.KFCM(4,t,['n','i','k','u'])){
        r=m=1;   // Line 449
        k.KDC(4,t);
        k.KO(-1,t,"􀇓");
      }
      else if(k.KFCM(4,t,['n','i','l','e'])){
        r=m=1;   // Line 450
        k.KDC(4,t);
        k.KO(-1,t,"􀇔");
      }
      else if(k.KFCM(4,t,['n','i','w','a'])){
        r=m=1;   // Line 452
        k.KDC(4,t);
        k.KO(-1,t,"􀇖");
      }
      else if(k.KFCM(4,t,['n','u','l','a'])){
        r=m=1;   // Line 455
        k.KDC(4,t);
        k.KO(-1,t,"􀇙");
      }
      else if(k.KFCM(4,t,['o','n','i','n'])){
        r=m=1;   // Line 460
        k.KDC(4,t);
        k.KO(-1,t,"􀇞");
      }
      else if(k.KFCM(4,t,['o','n','k','o'])){
        r=m=1;   // Line 462
        k.KDC(4,t);
        k.KO(-1,t,"􀇟");
      }
      else if(k.KFCM(4,t,['p','a','n','i'])){
        r=m=1;   // Line 473
        k.KDC(4,t);
        k.KO(-1,t,"􀇪");
      }
      else if(k.KFCM(4,t,['p','a','s','u'])){
        r=m=1;   // Line 480
        k.KDC(4,t);
        k.KO(-1,t,"􀇱");
      }
      else if(k.KFCM(4,t,['p','a','t','a'])){
        r=m=1;   // Line 481
        k.KDC(4,t);
        k.KO(-1,t,"􀇲");
      }
      else if(k.KFCM(4,t,['p','a','w','o'])){
        r=m=1;   // Line 483
        k.KDC(4,t);
        k.KO(-1,t,"􀇴");
      }
      else if(k.KFCM(4,t,['p','e','k','o'])){
        r=m=1;   // Line 484
        k.KDC(4,t);
        k.KO(-1,t,"􀇵");
      }
      else if(k.KFCM(4,t,['p','e','l','a'])){
        r=m=1;   // Line 485
        k.KDC(4,t);
        k.KO(-1,t,"􀇶");
      }
      else if(k.KFCM(4,t,['p','e','s','e'])){
        r=m=1;   // Line 490
        k.KDC(4,t);
        k.KO(-1,t,"􀇼");
      }
      else if(k.KFCM(4,t,['p','i','c','e'])){
        r=m=1;   // Line 493
        k.KDC(4,t);
        k.KO(-1,t,"􀇿");
      }
      else if(k.KFCM(4,t,['p','i','l','u'])){
        r=m=1;   // Line 496
        k.KDC(4,t);
        k.KO(-1,t,"􀈂");
      }
      else if(k.KFCM(4,t,['p','o','s','a'])){
        r=m=1;   // Line 505
        k.KDC(4,t);
        k.KO(-1,t,"􀈌");
      }
      else if(k.KFCM(4,t,['p','u','k','a'])){
        r=m=1;   // Line 509
        k.KDC(4,t);
        k.KO(-1,t,"􀈎");
      }
      else if(k.KFCM(4,t,['p','u','l','a'])){
        r=m=1;   // Line 510
        k.KDC(4,t);
        k.KO(-1,t,"􀈐");
      }
      else if(k.KFCM(4,t,['p','u','m','i'])){
        r=m=1;   // Line 511
        k.KDC(4,t);
        k.KO(-1,t,"􀈑");
      }
      else if(k.KFCM(4,t,['s','a','l','a'])){
        r=m=1;   // Line 514
        k.KDC(4,t);
        k.KO(-1,t,"􀈔");
      }
      else if(k.KFCM(4,t,['s','a','m','o'])){
        r=m=1;   // Line 518
        k.KDC(4,t);
        k.KO(-1,t,"􀈙");
      }
      else if(k.KFCM(4,t,['s','a','p','i'])){
        r=m=1;   // Line 521
        k.KDC(4,t);
        k.KO(-1,t,"􀈜");
      }
      else if(k.KFCM(4,t,['s','a','t','u'])){
        r=m=1;   // Line 525
        k.KDC(4,t);
        k.KO(-1,t,"􀈠");
      }
      else if(k.KFCM(4,t,['s','e','m','a'])){
        r=m=1;   // Line 528
        k.KDC(4,t);
        k.KO(-1,t,"􀈣");
      }
      else if(k.KFCM(4,t,['s','e','p','o'])){
        r=m=1;   // Line 529
        k.KDC(4,t);
        k.KO(-1,t,"􀌗");
      }
      else if(k.KFCM(4,t,['s','i','l','a'])){
        r=m=1;   // Line 533
        k.KDC(4,t);
        k.KO(-1,t,"􀈨");
      }
      else if(k.KFCM(4,t,['s','i','p','a'])){
        r=m=1;   // Line 538
        k.KDC(4,t);
        k.KO(-1,t,"􀈬");
      }
      else if(k.KFCM(4,t,['s','i','t','o'])){
        r=m=1;   // Line 540
        k.KDC(4,t);
        k.KO(-1,t,"􀈮");
      }
      else if(k.KFCM(4,t,['s','o','l','u'])){
        r=m=1;   // Line 542
        k.KDC(4,t);
        k.KO(-1,t,"􀈰");
      }
      else if(k.KFCM(4,t,['s','o','n','e'])){
        r=m=1;   // Line 543
        k.KDC(4,t);
        k.KO(-1,t,"􀈱");
      }
      else if(k.KFCM(4,t,['s','o','p','a'])){
        r=m=1;   // Line 544
        k.KDC(4,t);
        k.KO(-1,t,"􀈲");
      }
      else if(k.KFCM(4,t,['s','o','t','o'])){
        r=m=1;   // Line 545
        k.KDC(4,t);
        k.KO(-1,t,"􀈳");
      }
      else if(k.KFCM(4,t,['s','u','k','i'])){
        r=m=1;   // Line 546
        k.KDC(4,t);
        k.KO(-1,t,"􀈴");
      }
      else if(k.KFCM(4,t,['s','u','l','a'])){
        r=m=1;   // Line 547
        k.KDC(4,t);
        k.KO(-1,t,"􀈵");
      }
      else if(k.KFCM(4,t,['t','a','t','i'])){
        r=m=1;   // Line 566
        k.KDC(4,t);
        k.KO(-1,t,"􀉈");
      }
      else if(k.KFCM(4,t,['t','a','w','e'])){
        r=m=1;   // Line 568
        k.KDC(4,t);
        k.KO(-1,t,"􀉉");
      }
      else if(k.KFCM(4,t,['t','e','k','a'])){
        r=m=1;   // Line 570
        k.KDC(4,t);
        k.KO(-1,t,"􀉌");
      }
      else if(k.KFCM(4,t,['t','e','n','e'])){
        r=m=1;   // Line 572
        k.KDC(4,t);
        k.KO(-1,t,"􀉎");
      }
      else if(k.KFCM(4,t,['t','e','p','u'])){
        r=m=1;   // Line 575
        k.KDC(4,t);
        k.KO(-1,t,"􀉑");
      }
      if(m) {}
      else if(k.KFCM(4,t,['t','i','j','u'])){
        r=m=1;   // Line 577
        k.KDC(4,t);
        k.KO(-1,t,"􀉓");
      }
      else if(k.KFCM(4,t,['t','i','k','u'])){
        r=m=1;   // Line 578
        k.KDC(4,t);
        k.KO(-1,t,"􀉔");
      }
      else if(k.KFCM(4,t,['t','i','l','e'])){
        r=m=1;   // Line 579
        k.KDC(4,t);
        k.KO(-1,t,"􀉕");
      }
      else if(k.KFCM(4,t,['t','i','p','a'])){
        r=m=1;   // Line 581
        k.KDC(4,t);
        k.KO(-1,t,"􀉳");
      }
      else if(k.KFCM(4,t,['t','i','t','i'])){
        r=m=1;   // Line 583
        k.KDC(4,t);
        k.KO(-1,t,"􀉙");
      }
      else if(k.KFCM(4,t,['t','o','l','u'])){
        r=m=1;   // Line 585
        k.KDC(4,t);
        k.KO(-1,t,"􀉭");
      }
      else if(k.KFCM(4,t,['t','o','p','e'])){
        r=m=1;   // Line 587
        k.KDC(4,t);
        k.KO(-1,t,"􀉝");
      }
      else if(k.KFCM(4,t,['t','u','k','o'])){
        r=m=1;   // Line 589
        k.KDC(4,t);
        k.KO(-1,t,"􀉟");
      }
      else if(k.KFCM(4,t,['t','u','l','a'])){
        r=m=1;   // Line 590
        k.KDC(4,t);
        k.KO(-1,t,"􀉠");
      }
      else if(k.KFCM(4,t,['t','u','s','a'])){
        r=m=1;   // Line 592
        k.KDC(4,t);
        k.KO(-1,t,"􀉢");
      }
      else if(k.KFCM(4,t,['u','s','e','n'])){
        r=m=1;   // Line 603
        k.KDC(4,t);
        k.KO(-1,t,"􀌀");
      }
      else if(k.KFCM(4,t,['w','a','l','a'])){
        r=m=1;   // Line 606
        k.KDC(4,t);
        k.KO(-1,t,"􀉩");
      }
      else if(k.KFCM(4,t,['w','a','j','u'])){
        r=m=1;   // Line 611
        k.KDC(4,t);
        k.KO(-1,t,"􀉱");
      }
      else if(k.KFCM(4,t,['w','i','j','a'])){
        r=m=1;   // Line 614
        k.KDC(4,t);
        k.KO(-1,t,"􀉸");
      }
      else if(k.KFCM(4,t,['w','i','k','i'])){
        r=m=1;   // Line 615
        k.KDC(4,t);
        k.KO(-1,t,"􀉹");
      }
      else if(k.KFCM(3,t,['a','l','u'])){
        r=m=1;   // Line 238
        k.KDC(3,t);
        k.KO(-1,t,"􀄃");
      }
      else if(k.KFCM(3,t,['a','m','o'])){
        r=m=1;   // Line 239
        k.KDC(3,t);
        k.KO(-1,t,"􀄄");
      }
      else if(k.KFCM(3,t,['a','n','i'])){
        r=m=1;   // Line 241
        k.KDC(3,t);
        k.KO(-1,t,"􀄆");
      }
      else if(k.KFCM(3,t,['a','s','a'])){
        r=m=1;   // Line 247
        k.KDC(3,t);
        k.KO(-1,t,"􀄌");
      }
      else if(k.KFCM(3,t,['c','o','n'])){
        r=m=1;   // Line 261
        k.KDC(3,t);
        k.KO(-1,t,"􀄚");
      }
      else if(k.KFCM(3,t,['e','m','e'])){
        r=m=1;   // Line 268
        k.KDC(3,t);
        k.KO(-1,t,"􀄡");
      }
      else if(k.KFCM(3,t,['h','a','n'])){
        r=m=1;   // Line 275
        k.KDC(3,t);
        k.KO(-1,t,"􀄪");
      }
      else if(k.KFCM(3,t,['h','e','n'])){
        r=m=1;   // Line 280
        k.KDC(3,t);
        k.KO(-1,t,"􀄯");
      }
      else if(k.KFCM(3,t,['h','o','n'])){
        r=m=1;   // Line 283
        k.KDC(3,t);
        k.KO(-1,t,"􀄲");
      }
      else if(k.KFCM(3,t,['i','l','i'])){
        r=m=1;   // Line 295
        k.KDC(3,t);
        k.KO(-1,t,"􀄾");
      }
      else if(k.KFCM(3,t,['i','w','e'])){
        r=m=1;   // Line 306
        k.KDC(3,t);
        k.KO(-1,t,"􀅆");
      }
      else if(k.KFCM(3,t,['j','a','n'])){
        r=m=1;   // Line 309
        k.KDC(3,t);
        k.KO(-1,t,"􀅉");
      }
      else if(k.KFCM(3,t,['j','o','n'])){
        r=m=1;   // Line 315
        k.KDC(3,t);
        k.KO(-1,t,"􀅏");
      }
      else if(k.KFCM(3,t,['k','a','n'])){
        r=m=1;   // Line 325
        k.KDC(3,t);
        k.KO(-1,t,"􀅘");
      }
      else if(k.KFCM(3,t,['k','i','n'])){
        r=m=1;   // Line 343
        k.KDC(3,t);
        k.KO(-1,t,"􀅪");
      }
      else if(k.KFCM(3,t,['k','u','n'])){
        r=m=1;   // Line 363
        k.KDC(3,t);
        k.KO(-1,t,"􀅾");
      }
      else if(k.KFCM(3,t,['l','a','n'])){
        r=m=1;   // Line 375
        k.KDC(3,t);
        k.KO(-1,t,"􀆉");
      }
      else if(k.KFCM(3,t,['l','e','n'])){
        r=m=1;   // Line 381
        k.KDC(3,t);
        k.KO(-1,t,"􀆏");
      }
      else if(k.KFCM(3,t,['l','u','n'])){
        r=m=1;   // Line 397
        k.KDC(3,t);
        k.KO(-1,t,"􀆠");
      }
      else if(k.KFCM(3,t,['m','e','n'])){
        r=m=1;   // Line 412
        k.KDC(3,t);
        k.KO(-1,t,"􀆯");
      }
      else if(k.KFCM(3,t,['n','a','n'])){
        r=m=1;   // Line 437
        k.KDC(3,t);
        k.KO(-1,t,"􀇇");
      }
      else if(k.KFCM(3,t,['n','i','n'])){
        r=m=1;   // Line 451
        k.KDC(3,t);
        k.KO(-1,t,"􀇕");
      }
      else if(k.KFCM(3,t,['n','o','n'])){
        r=m=1;   // Line 454
        k.KDC(3,t);
        k.KO(-1,t,"􀇘");
      }
      else if(k.KFCM(3,t,['o','k','e'])){
        r=m=1;   // Line 458
        k.KDC(3,t);
        k.KO(-1,t,"􀇜");
      }
      else if(k.KFCM(3,t,['o','s','a'])){
        r=m=1;   // Line 466
        k.KDC(3,t);
        k.KO(-1,t,"􀇣");
      }
      else if(k.KFCM(3,t,['o','t','i'])){
        r=m=1;   // Line 469
        k.KDC(3,t);
        k.KO(-1,t,"􀇦");
      }
      else if(k.KFCM(3,t,['p','a','n'])){
        r=m=1;   // Line 472
        k.KDC(3,t);
        k.KO(-1,t,"􀇩");
      }
      else if(k.KFCM(3,t,['p','e','n'])){
        r=m=1;   // Line 488
        k.KDC(3,t);
        k.KO(-1,t,"􀇹");
      }
      else if(k.KFCM(3,t,['p','o','n'])){
        r=m=1;   // Line 503
        k.KDC(3,t);
        k.KO(-1,t,"􀈊");
      }
      else if(k.KFCM(3,t,['s','i','n'])){
        r=m=1;   // Line 534
        k.KDC(3,t);
        k.KO(-1,t,"􀈩");
      }
      else if(k.KFCM(3,t,['s','u','n'])){
        r=m=1;   // Line 548
        k.KDC(3,t);
        k.KO(-1,t,"􀈶");
      }
      else if(k.KFCM(3,t,['t','a','n'])){
        r=m=1;   // Line 562
        k.KDC(3,t);
        k.KO(-1,t,"􀉄");
      }
      else if(k.KFCM(3,t,['t','e','n'])){
        r=m=1;   // Line 571
        k.KDC(3,t);
        k.KO(-1,t,"􀉍");
      }
      else if(k.KFCM(3,t,['t','u','n'])){
        r=m=1;   // Line 591
        k.KDC(3,t);
        k.KO(-1,t,"􀉡");
      }
      else if(k.KFCM(3,t,['u','l','i'])){
        r=m=1;   // Line 597
        k.KDC(3,t);
        k.KO(-1,t,"􀉚");
      }
      else if(k.KFCM(3,t,['u','m','o'])){
        r=m=1;   // Line 600
        k.KDC(3,t);
        k.KO(-1,t,"􀉧");
      }
      else if(k.KFCM(3,t,['u','t','a'])){
        r=m=1;   // Line 605
        k.KDC(3,t);
        k.KO(-1,t,"􀉯");
      }
      else if(k.KFCM(3,t,['w','e','n'])){
        r=m=1;   // Line 612
        k.KDC(3,t);
        k.KO(-1,t,"􀉶");
      }
      else if(k.KFCM(2,t,['c','i'])){
        r=m=1;   // Line 257
        k.KDC(2,t);
        k.KO(-1,t,"􀄖");
      }
      else if(k.KFCM(2,t,['h','e'])){
        r=m=1;   // Line 278
        k.KDC(2,t);
        k.KO(-1,t,"􀄭");
      }
      else if(k.KFCM(2,t,['h','u'])){
        r=m=1;   // Line 286
        k.KDC(2,t);
        k.KO(-1,t,"􀄵");
      }
      else if(k.KFCM(2,t,['i','n'])){
        r=m=1;   // Line 297
        k.KDC(2,t);
        k.KO(-1,t,"􀅀");
      }
      else if(k.KFCM(2,t,['j','a'])){
        r=m=1;   // Line 307
        k.KDC(2,t);
        k.KO(-1,t,"􀅇");
      }
      else if(k.KFCM(2,t,['j','e'])){
        r=m=1;   // Line 313
        k.KDC(2,t);
        k.KO(-1,t,"􀅍");
      }
      else if(k.KFCM(2,t,['j','u'])){
        r=m=1;   // Line 317
        k.KDC(2,t);
        k.KO(-1,t,"􀅑");
      }
      else if(k.KFCM(2,t,['k','a'])){
        r=m=1;   // Line 320
        k.KDC(2,t);
        k.KO(-1,t,"􀅓");
      }
      else if(k.KFCM(2,t,['k','i'])){
        r=m=1;   // Line 336
        k.KDC(2,t);
        k.KO(-1,t,"􀅣");
      }
      else if(k.KFCM(2,t,['k','o'])){
        r=m=1;   // Line 346
        k.KDC(2,t);
        k.KO(-1,t,"􀅭");
      }
      else if(k.KFCM(2,t,['l','a'])){
        r=m=1;   // Line 370
        k.KDC(2,t);
        k.KO(-1,t,"􀆄");
      }
      else if(k.KFCM(2,t,['l','e'])){
        r=m=1;   // Line 379
        k.KDC(2,t);
        k.KO(-1,t,"􀆍");
      }
      else if(k.KFCM(2,t,['l','o'])){
        r=m=1;   // Line 393
        k.KDC(2,t);
        k.KO(-1,t,"􀆜");
      }
      else if(k.KFCM(2,t,['m','i'])){
        r=m=1;   // Line 417
        k.KDC(2,t);
        k.KO(-1,t,"􀆴");
      }
      else if(k.KFCM(2,t,['m','u'])){
        r=m=1;   // Line 423
        k.KDC(2,t);
        k.KO(-1,t,"􀆺");
      }
      else if(k.KFCM(2,t,['n','a'])){
        r=m=1;   // Line 430
        k.KDC(2,t);
        k.KO(-1,t,"􀇁");
      }
      else if(k.KFCM(2,t,['n','e'])){
        r=m=1;   // Line 442
        k.KDC(2,t);
        k.KO(-1,t,"􀇌");
      }
      else if(k.KFCM(2,t,['n','o'])){
        r=m=1;   // Line 453
        k.KDC(2,t);
        k.KO(-1,t,"􀇗");
      }
      else if(k.KFCM(2,t,['p','a'])){
        r=m=1;   // Line 470
        k.KDC(2,t);
        k.KO(-1,t,"􀇧");
      }
      else if(k.KFCM(2,t,['p','i'])){
        r=m=1;   // Line 492
        k.KDC(2,t);
        k.KO(-1,t,"􀇾");
      }
      else if(k.KFCM(2,t,['p','o'])){
        r=m=1;   // Line 500
        k.KDC(2,t);
        k.KO(-1,t,"􀈇");
      }
      else if(k.KFCM(2,t,['s','a'])){
        r=m=1;   // Line 513
        k.KDC(2,t);
        k.KO(-1,t,"􀈒");
      }
      else if(k.KFCM(2,t,['s','e'])){
        r=m=1;   // Line 526
        k.KDC(2,t);
        k.KO(-1,t,"􀈡");
      }
      else if(k.KFCM(2,t,['s','o'])){
        r=m=1;   // Line 541
        k.KDC(2,t);
        k.KO(-1,t,"􀈯");
      }
      else if(k.KFCM(2,t,['t','a'])){
        r=m=1;   // Line 552
        k.KDC(2,t);
        k.KO(-1,t,"􀈺");
      }
      else if(k.KFCM(2,t,['t','e'])){
        r=m=1;   // Line 569
        k.KDC(2,t);
        k.KO(-1,t,"􀉋");
      }
      else if(k.KFCM(2,t,['t','u'])){
        r=m=1;   // Line 588
        k.KDC(2,t);
        k.KO(-1,t,"􀉞");
      }
      else if(k.KFCM(2,t,['u','n'])){
        r=m=1;   // Line 601
        k.KDC(2,t);
        k.KO(-1,t,"􀉬");
      }
      else if(k.KFCM(2,t,['w','a'])){
        r=m=1;   // Line 610
        k.KDC(2,t);
        k.KO(-1,t,"􀉰");
      }
      else if(k.KFCM(2,t,['w','i'])){
        r=m=1;   // Line 613
        k.KDC(2,t);
        k.KO(-1,t,"􀉷");
      }
      else if(k.KFCM(1,t,['o'])){
        r=m=1;   // Line 456
        k.KDC(1,t);
        k.KO(-1,t,"􀇚");
      }
      else if(k.KFCM(1,t,['0'])){
        r=m=1;   // Line 619
        k.KDC(1,t);
        k.KO(-1,t,"􀊩");
      }
      else if(k.KFCM(1,t,['1'])){
        r=m=1;   // Line 620
        k.KDC(1,t);
        k.KO(-1,t,"􀊪");
      }
      else if(k.KFCM(1,t,['2'])){
        r=m=1;   // Line 621
        k.KDC(1,t);
        k.KO(-1,t,"􀊫");
      }
      else if(k.KFCM(1,t,['3'])){
        r=m=1;   // Line 622
        k.KDC(1,t);
        k.KO(-1,t,"􀊬");
      }
      else if(k.KFCM(1,t,['4'])){
        r=m=1;   // Line 623
        k.KDC(1,t);
        k.KO(-1,t,"􀊭");
      }
      else if(k.KFCM(1,t,['5'])){
        r=m=1;   // Line 624
        k.KDC(1,t);
        k.KO(-1,t,"􀊮");
      }
      else if(k.KFCM(1,t,['6'])){
        r=m=1;   // Line 625
        k.KDC(1,t);
        k.KO(-1,t,"􀊯");
      }
      else if(k.KFCM(1,t,['7'])){
        r=m=1;   // Line 626
        k.KDC(1,t);
        k.KO(-1,t,"􀊰");
      }
      else if(k.KFCM(1,t,['8'])){
        r=m=1;   // Line 627
        k.KDC(1,t);
        k.KO(-1,t,"􀊱");
      }
      else if(k.KFCM(1,t,['9'])){
        r=m=1;   // Line 628
        k.KDC(1,t);
        k.KO(-1,t,"􀊲");
      }
      else if(1){
        r=m=1;   // Line 229
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 180
        k.KDC(0,t);
        k.KO(-1,t,"　");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"ʭ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 169
        k.KDC(0,t);
        k.KO(-1,t,"』");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 137
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 140
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 218
        k.KDC(0,t);
        k.KO(-1,t,"｣");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 142
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 143
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 226
        k.KDC(0,t);
        k.KO(-1,t,"､");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 193
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 227
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 228
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 183
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 184
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 185
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 190
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KO(-1,t,"『");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 217
        k.KDC(0,t);
        k.KO(-1,t,"｢");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 177
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 178
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 179
        k.KDC(0,t);
        k.KO(-1,t,"≈");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"A");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 174
        k.KDC(0,t);
        k.KO(-1,t,"B");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 172
        k.KDC(0,t);
        k.KO(-1,t,"C");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"D");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,"E");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 162
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 163
        k.KDC(0,t);
        k.KO(-1,t,"G");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,"H");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,"I");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 165
        k.KDC(0,t);
        k.KO(-1,t,"J");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 166
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"L");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 176
        k.KDC(0,t);
        k.KO(-1,t,"M");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 175
        k.KDC(0,t);
        k.KO(-1,t,"N");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 154
        k.KDC(0,t);
        k.KO(-1,t,"O");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,"P");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 149
        k.KDC(0,t);
        k.KO(-1,t,"R");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 150
        k.KDC(0,t);
        k.KO(-1,t,"T");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 173
        k.KDC(0,t);
        k.KO(-1,t,"V");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 147
        k.KDC(0,t);
        k.KO(-1,t,"W");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 171
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"Y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 170
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 205
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 207
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 206
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 139
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 182
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 208
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 223
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 221
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 210
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 197
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 211
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 212
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 213
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 202
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 214
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 215
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 216
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 225
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 224
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 203
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 204
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 198
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 209
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 199
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 201
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 222
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 220
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 200
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 219
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 157
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    return r;
  };
}
