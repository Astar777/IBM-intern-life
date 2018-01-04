var myDate = new Date();

//获取到时区差值 得到的是分钟值  
var offset = myDate.getTimezoneOffset();

//获取时分秒
var hour = myDate.getHours();
var minute = myDate.getMinutes();
var second = myDate.getSeconds();
var zone = offset / 60
var g_hour = hour + zone

//动态生成option
for(var h = 0; h <= 23; h++) {
	$("#l_hour").append("<option >" + h + "</option>")
}
for(var m = 0; m <= 59; m++) {
	$("#l_minute").append("<option >" + m + "</option>")
}
for(var s = 0; s <= 59; s++) {
	$("#l_second").append("<option >" + s + "</option>")
}

for(var h = 0; h <= 23; h++) {
	$("#g_hour").append("<option >" + h + "</option>")
}
for(var m = 0; m <= 59; m++) {
	$("#g_minute").append("<option >" + m + "</option>")
}
for(var s = 0; s <= 59; s++) {
	$("#g_second").append("<option >" + s + "</option>")
}
//初始化显示
$("#l_hour").val(hour);
$("#l_minute").val(minute);
$("#l_second").val(second);
$("#g_hour").val(g_hour);
$("#g_minute").val(minute);
$("#g_second").val(second);

//获取选中的值 $("#ddlregtype").find("option:selected").text();
//初始化显示
//当地时间
var show_lh = $("#l_hour").find("option:selected").val();
var show_lm = $("#l_minute").find("option:selected").val();
var show_ls = $("#l_second").find("option:selected").val();
$("#localTime").html("当地时间：" + show_lh + ":" + show_lm + ":" + show_ls)

//标准时间
var show_gh = $("#g_hour").find("option:selected").val();
var show_gm = $("#g_minute").find("option:selected").val();
var show_gs = $("#g_second").find("option:selected").val();
$("#GMT").html("标准时间：" + show_gh + ":" + show_gm + ":" + show_gs)

//$("#zone").html("时区差值：" + offset / 60 + "hour")



//当本地select option改变
function showlocaltime(h, m, s) {
	var show_lh = h.find("option:selected").val();
	var show_lm = m.find("option:selected").val();
	var show_ls = s.find("option:selected").val();
	$("#localTime").html("当地时间：" + show_lh + ":" + show_lm + ":" + show_ls);
	//str to number
	var n_lh = parseInt(show_lh);
	var addn = n_lh + zone;
	//num to string
	if(addn < 0) {
		addn = addn + 24;
		var s_lh = addn.toString()

	} else {
		var s_lh = addn.toString()

	}
	$("#g_hour").val(s_lh);
	$("#g_minute").val(show_lm);
	$("#g_second").val(show_ls);
$("#GMT").html("标准时间：" + s_lh + ":" + show_lm + ":" + show_ls)
}
//当标准select option改变
function showgmt(h, m, s) {
	var show_gh = h.find("option:selected").val();
	var show_gm = m.find("option:selected").val();
	var show_gs = s.find("option:selected").val();
	$("#GMT").html("标准时间：" + show_gh + ":" + show_gm + ":" + show_gs);
	//str to number
	var n_gh = parseInt(show_gh);
	var addn = n_gh - zone;
	//num to string
	if(addn > 24) {
		addn = addn - 24;
		var s_gh = addn.toString()

	} else {
		var s_gh = addn.toString()

	}
	$("#l_hour").val(s_gh);
	$("#l_minute").val(show_gm);
	$("#l_second").val(show_gs);
$("#localTime").html("本地时间：" + s_gh + ":" + show_lm + ":" + show_ls)
}