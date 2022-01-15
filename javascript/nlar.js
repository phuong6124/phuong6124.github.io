var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "HELLO";
	$scope.updateInfo = "Độc toàn thân, các anh ib mess ting 2s rep nhé!";
	$scope.verify = "Nhím";
	$scope.des = "iu tất cả các anh!!";
	$scope.cv = "Giới Thiệu";
	$scope.job1 = "Facebook: Trần Thị Mai Phương";
	$scope.job2 = "Instagram: ttmp_6124";
	$scope.contact = "Thông Tin";
	$scope.contact1 = "IDFF: 1953684607";
	$scope.contact2 = "MBbank: 0822864778";
	$scope.contactmi = " Thông Tin Liên Hệ";
	$scope.ifyou = "Mọi người có ghé vào thì cho mình xin 1 follow nha. Cám ơn nè !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Messenger";
	$scope.modal3 = "Tiktok";
	$scope.modal4 = "Email";
	$scope.modal5 = "Số điện thoại";
	$scope.link1 = "https://www.facebook.com/ttmp.6124";
	$scope.link2 = "https://www.messenger.com/t/100027700523833/";
	$scope.link3 = "https://vt.tiktok.com/ZSeBSKyLN/";
	$scope.button4 = "phuong@gmail.com";
	$scope.button5 = "0123456789";
	$scope.title2 = "Câu chuyện của tôi";
	$scope.contentStory1 = "Đang cập nhật...";
	$scope.contentStory2 = "Đang cập nhật...";
	$scope.storytitle1 = "Chủ đề 1";
	$scope.storytitle2 = "Chủ đề 2";
	$scope.nothinglikeus = "Tác giả: ?";
	$scope.thankall = "Cảm ơn mọi người ";
	$scope.au = "Đừng bấm vào đây nha!";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});
