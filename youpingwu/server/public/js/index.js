

// 自定义的js-->主要做数据的请求 与 显示数据
$(function(){
    //初始化数据 -->访问 http://192.168.9.101:8080/books/
    function initList(){
        $.ajax({
            url:"/books",
            type:"get",
            dataType:"json",//预期返回的数据类型
            success:function(data){
                var html = template("indexTpl",{list:data});
                $("#dataList").html(html);

                $("#dataList").find("tr").each(function(index,element){
                    var td = $(element).find('td:eq(5)');
                    var id = $(element).find('td:eq(0)').text();

                     //编辑图书图书
                     td.find("a:eq(0)").click(function(){
                        
                        editBook(id);
                    })

                    //删除图书
                    td.find("a:eq(1)").click(function(){
                        
                        deleteBook(id);
                    })

                       //绑定添加图书事件。。
                        addBook();
                        //表单初始化
                        var form = $("#addBookForm");
                        form.get(0).reset();
                        form.find('input[type=hidden]').val('');
                })


             
            },
            error:function(){
                alert("初始化错误");
            }
        })
    }
    initList();
function editBook(id){
    var form = $("#addBookForm");
    $.ajax({
        url:"/books/book/"+id,
        type:"get",
        dataType:"json",
        success:function(data){
            //初始化弹窗
            var mark = new MarkBox(600,400,"编辑图书",form.get(0));
            mark.init();
           
            form.find("input[name=id]").val(data.id);
            form.find("input[name=name]").val(data.name);
            form.find("input[name=author]").val(data.author);
            form.find("input[name=category]").val(data.category);
            form.find("input[name=message]").val(data.message);

            form.find("input[type=button]").unbind("click").click(function(){
                $.ajax({
                    url:"/books/book",
                    type:"put",
                    data:form.serialize(),//表单序列化。将表单数据格式化为 name="张三"&age=18
                    dataType:"json",
                    success:function(data){
                        if(data.flag ==1){
                            mark.close();
                            initList();
                        }else{
                            alert("修改失败");
                        }
                    }
                })
        
            })

        }
    })
}


function deleteBook(id){
    
    $.ajax({
        url:"/books/book/"+id,
        type:"delete",
        dataType:"json",
        success:function(data){
        
            if(data.flag =='1'){
                initList();
            }
        }
    })
}


function addBook(){
  //添加图书的点击事件
  $("#addBookid").click(function(){
    var form = $("#addBookForm");
    form.get(0).reset();
    //实例化弹窗对象
    var mark = new MarkBox(600,400,"添加图书",form.get(0));
    mark.init();
    form.find("input[type=button]").unbind("click").click(function(){
        var type_text = form.find("input[type=text]");
        for(var key in type_text){
            var mes = type_text[key].value;
            if(mes==""){
                alert("数据不能为空！！")
                return;
            }
        }
        
        $.ajax({
            url:"/books/book",
            type:"post",
            data:form.serialize(),//表单序列化。将表单数据格式化为 name="张三"&age=18
            dataType:"json",
            success:function(data){
                if(data.flag ==1){
                    mark.close();
                    initList();
                }else{
                    alert("添加失败");
                }
            }
        })

    })

})
}
  
})