<%
  Response.Buffer = true;
  Response.ContentType = "text/html; charset=windows-1251";

function sendMail(to, from, subject, body, outServer)
{

  iMsg  = Server.CreateObject("CDO.Message");
  iConf = Server.CreateObject("CDO.Configuration");
  cdoSendUsingPort = 2;
  Flds = iConf.Fields;
  Flds.Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = cdoSendUsingPort;
  Flds.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = outServer;
  Flds.Item("http://schemas.microsoft.com/cdo/configuration/smtpconnectiontimeout") = 15;
  Flds.Update();
  iMsg.Configuration = iConf;

  iMsg.To = to;
  iMsg.From = from;
  iMsg.Subject = subject;
  iMsg.HTMLBody = body;
  iMsg.Send();
}

  var CRLF = String.fromCharCode(0x0D, 0x0A);
  var s = "гЮЙЮГ ГБНМЙЮ Я КЕМДХМЦЮ Ford";
  var body = 
'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">'+
'<html><head>'+
'<meta http-equiv="Content-Type" content="text/html; charset=KOI8-R">'+
'</head><body>';
  
  body += '<h1>гЮЙЮГ ГБНМЙЮ Я КЕМДХМЦЮ Ford</h1>'+CRLF;
  body += 
    "<p>рЕКЕТНМ: "+unescape(Request("phone")) + "</p>" + CRLF +
    "<p>дЮММШЕ:<br /></p>\r\n"+unescape(Request("data")) + CRLF +
    "</body></html>";

  // нРОПЮБЙЮ ОХЯЭЛЮ 
 
  var recipient = "kirunnikov.e@ford-krasnoyarsk.ru,trp@itl24.ru,elenka.naumova@gmail.com,naumova@agroup-ltd.ru,shvaikov.a@ford-krasnoyarsk.ru,celishcheva@ford-krasnoyarsk.ru,suhonos.s@ford-krasnoyarsk.ru";
  var recipient = "mamenko@mail.ru";
  sendMail(recipient, "v8<null@maildaemon.ru>",
      s, body, "127.0.0.1");
  Response.Write("ok");
%>
