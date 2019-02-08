
exports.kalkulator =function (variabel_1,variabel_2,operator) {
	switch (operator){
		case 'plus' :
		return variabel_1+variabel_2;
		break;

		case 'min' :
		return variabel_1-variabel_2;
		break;

		case 'mult' :
		return variabel_1*variabel_2;
		break

		case 'div':
		return variabel_1/variabel_2;
		break

		default : 
		return "Salah operator mas!!"
	}
}
