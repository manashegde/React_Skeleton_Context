/**
 * 
 */
package sa.gov.nic.xbc.client.servlet;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;
import java.util.jar.Attributes;
import java.util.jar.Manifest;
import java.util.logging.Logger;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sa.gov.nic.xbc.common.shared.util.Util;

/**
 * @author Ishan Kaushik
 *
 */

@WebServlet(value = "/build-info", name = "build-info servlet")
public class BuildInfoServlet extends HttpServlet {

	private static final long serialVersionUID = 2508787385422996980L;

	private static final Logger logger = Util.getLogger();

	private static final AtomicLong cntr = new AtomicLong();

	private static final String[] attributeNames = new String[] { "build-number", "build-branch", "project-name",
			"build-host", "build-dir", "build-time", "version", "git-hash", "home", "user" };

	private String attributeList = null;

	private void populateAttributeList(ServletContext servletContext) throws IOException {
		synchronized (BuildInfoServlet.class) {
			if (attributeList == null) {
				InputStream inputStream = servletContext.getResourceAsStream("/META-INF/MANIFEST.MF");
				Manifest manifest = new Manifest(inputStream);
				Attributes attributes = manifest.getMainAttributes();
				StringBuilder sb = new StringBuilder();
				for (String name : attributeNames) {
					sb.append(String.format("%s = %s\n", name, attributes.getValue(name)));
				}
				attributeList = sb.toString();
				logger.config(attributeList.replaceAll("[\r\n]+", " | "));
			}
		}
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		populateAttributeList(getServletContext());
		resp.setContentType("text/plain");
		PrintWriter out = resp.getWriter();
		out.println(String.format("[%s] %s", cntr.incrementAndGet(), req.getRemoteAddr()));
		out.println("-------------------------");
		out.println(attributeList);
		out.println("-------------------------");
		out.println(Util.getBuildInfoCommonValues());
		out.println("-------------------------");
		out.println(String.format("%s", new Date()));
		out.flush();
		out.close();
	}

}
