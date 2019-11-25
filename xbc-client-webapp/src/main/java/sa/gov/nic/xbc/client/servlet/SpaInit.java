/**
 * 
 */
package sa.gov.nic.xbc.client.servlet;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Kaushik.Das
 *
 */
@WebServlet("/SpaInit")
public class SpaInit extends HttpServlet {

	private static final long serialVersionUID = 8259886733888750289L;

	@Resource(lookup = "rest/ep/xbcGateway/services")
	private String xbcGatewayServicesEp;

	@Resource(lookup = "nicIdentityService")
	private String nicIdentityServicesEp;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setAttribute("xbcGatewayServicesEp", xbcGatewayServicesEp);
		req.setAttribute("nicIdentityService", nicIdentityServicesEp);
		req.getRequestDispatcher("SpaInit.jsp").forward(req, resp);
	}
}
