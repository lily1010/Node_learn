var fs = require("fs");
var buf = new Buffer(1024);

console.log("׼�����ļ���");
fs.open('test.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("�ļ��򿪳ɹ���");
   console.log("׼����ȡ�ļ���");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // �������ȡ���ֽ�
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // �ر��ļ�
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("�ļ��رճɹ�");
      });
   });
});