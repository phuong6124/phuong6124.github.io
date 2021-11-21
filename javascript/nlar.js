var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "HELLO";
	$scope.updateInfo = "Mình yêu tận 10 anh đó nha , ai cần ib Facebook mình nè !";
	$scope.verify = "Bé Nhím";
	$scope.des = "Tiktoker Pro Vip";
	$scope.cv = "Giới Thiệu";
	$scope.job1 = "Facebook: Trần Thị Mai Phương";
	$scope.job2 = "Instagram: ttmp_6124";
	$scope.contact = "Thông Tin";
	$scope.contact1 = "IDFF: 1953684607";
	$scope.contact2 = "VCB: 1020860829";
	$scope.contactmi = " Thông Tin Liên Hệ";
	$scope.ifyou = "Mọi người có ghé vào thì cho mình xin 1 follow nha. Cám ơn nè !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Messenger";
	$scope.modal3 = "Tiktok";
	$scope.modal4 = "Email";
	$scope.modal5 = "Số điện thoại";
	$scope.linkfb = "https://www.facebook.com/ttmp.6124";
	$scope.linkzl = "https://www.messenger.com/t/100027700523833/";
	$scope.linksc = "https://vt.tiktok.com/ZSeBSKyLN/";
	$scope.linkgm = "";
	$scope.phonenumber = "0123456789";
	$scope.email = "phuong@gmail.com";
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
