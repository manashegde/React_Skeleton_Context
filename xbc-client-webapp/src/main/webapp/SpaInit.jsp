<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	<html>

	<head>
		<meta http-equiv="Content-Type"
		      content="text/html; charset=ISO-8859-1">
		<title>nic-xbc-client</title>
	</head>

	<body>

		<%
		String xbcGatewayServicesEp = (String) request.getAttribute("xbcGatewayServicesEp");
	%>
			<div id="xbcGatewayServicesEp"
			     style="display:none;"
			     di="<%=xbcGatewayServicesEp%>">
				dynamically injecting xbcGatewayServicesEp via server.xml =
				<%=xbcGatewayServicesEp%>
			</div>

		<%String nicIdentityService = (String) request.getAttribute("nicIdentityService");
			%>
					<div id="nicIdentityService"
						 style="display:none;"
						 di="<%=nicIdentityService%>">
						dynamically injecting nicIdentityService via server.xml =
						<%=nicIdentityService%>
					</div>

			<%@include file="index.html"%>
	</body>

	</html>