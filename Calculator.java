  
import java.awt.*;    
import java.awt.event.*;  

 class Calculator extends Frame implements ActionListener{      
     TextField t= new TextField(); 
      Button b1 = new Button("1");  
      Button b2 = new Button("2");  
      Button b3 = new Button("3");  
      Button b4 = new Button("/");  
      Button b5 = new Button("4");  
      Button b6 = new Button("5");  
      Button b7 = new Button("6");  
      Button b8 = new Button("X");  
      Button b9 = new Button("7");  
      Button b10 = new Button("8");  
      Button b11 = new Button("9");  
      Button b12 = new Button("-");  
      Button b13 = new Button("0");  
      Button b14 = new Button("Clear");  
      Button b15 = new Button("=");  
      Button b16 = new Button("+");  
      static int n1,n2,n3;
       int flag;

      Calculator(){ 
      

      t.setBounds(20,40,390,100);

      b1.setBounds(20,160,80,40);  
      b2.setBounds(120,160,80,40);
      b3.setBounds(220,160,80,40);
      b4.setBounds(320,160,80,40);
      b5.setBounds(20,220,80,40);  
      b6.setBounds(120,220,80,40);
      b7.setBounds(220,220,80,40);
      b8.setBounds(320,220,80,40);
      b9.setBounds(20,280,80,40);  
      b10.setBounds(120,280,80,40);
      b11.setBounds(220,280,80,40);
      b12.setBounds(320,280,80,40);
      b13.setBounds(20,340,80,40);  
      b14.setBounds(120,340,80,40);
      b15.setBounds(220,340,80,40);
      b16.setBounds(320,340,80,40);
    

      b1.addActionListener(this);
      b2.addActionListener(this);
      b3.addActionListener(this);
      b4.addActionListener(this);
      b5.addActionListener(this);
      b6.addActionListener(this);
      b7.addActionListener(this);
      b8.addActionListener(this);
      b9.addActionListener(this);
      b10.addActionListener(this);
      b11.addActionListener(this);
      b12.addActionListener(this);
      b13.addActionListener(this);
      b14.addActionListener(this);
      b15.addActionListener(this);
      b16.addActionListener(this);
      
      
      add(b1);  
      add(b2);  
      add(b3);  
      add(b4);  
      add(b5);  
      add(b6);  
      add(b7);  
      add(b8);  
      add(b9);  
      add(b10);  
      add(b11);  
      add(b12);  
      add(b13);  
      add(b14);  
      add(b15);  
      add(b16);  
      add(t);  
      
  
    
      setSize(430,420);  
      setTitle("This is our basic AWT example");   
      setLayout(null);   
      setVisible(true);  
}   

public void actionPerformed(ActionEvent e){
    
if(e.getSource()==b1){
   t.setText("1");
}
else if(e.getSource()==b2){
   t.setText("2");
}
else if(e.getSource()==b3){
   t.setText("3");
}
else if(e.getSource()==b5){
   t.setText("4");
}
else if(e.getSource()==b6){
   t.setText("5");
}
else if(e.getSource()==b7){
   t.setText("6");
}
else if(e.getSource()==b9){
   t.setText("7");
}
else if(e.getSource()==b10){
   t.setText("8");
}
else if(e.getSource()==b11){
   t.setText("9");
}
else if(e.getSource()==b13){
   t.setText("0");
}
else if(e.getSource()==b14){
   t.setText("");
}

else if(e.getSource()==b16){
   
   n1=Integer.parseInt(t.getText());
   System.out.println(n1);
   t.setText("");
   flag=1;
}

else if(e.getSource()==b12){
   n1=Integer.parseInt(t.getText());
   System.out.println(n1);
   t.setText("");
   flag=2;
}
else if(e.getSource()==b8){
   n1=Integer.parseInt(t.getText());
   System.out.println(n1);
   t.setText("");
   flag=3;
}
else if(e.getSource()==b4){
   n1=Integer.parseInt(t.getText());
   System.out.println(n1);
   t.setText("");
   flag=4;
}

else if(e.getSource()==b15){
   n2=Integer.parseInt(t.getText());
   n3=Integer.parseInt(t.getText());
   System.out.println(n2);
   if(flag==1){
   String str=Integer.toString(n1+n2);
   t.setText(str);
   }
   else if(flag==2){
   String str=Integer.toString(n1-n2);
   t.setText(str);      
   }
   else if(flag==3){
   String str=Integer.toString(n1*n2);
   t.setText(str);
   }
   else if(flag==4){
   String str=Integer.toString(n1/n2);
   t.setText(str);
   }
 
   
}
else{
   t.setText("");
}

}

public static void main(String args[]){
   new Calculator();    
   }  
}
