let homeService = require("@module/home/service")
  
class HomeController {

	index(request, reply) {
		let service = new homeService()
		reply.view('pages/home', {
			conteudo: service.test()
		})
	}    
}
module.exports = HomeController    