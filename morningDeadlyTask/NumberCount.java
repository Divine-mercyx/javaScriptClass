public class NumberCount {

    public static void main(String[] args) {
      int[] values = {2, 2, 1, 3, 5, 5};
      System.out.println(convertArray(values));
    }


    public static String convertArray(int[] values) {
      MyMap anoda = new MyMap();
      for (int item : values) {
        anoda.put(String.format("%s", item), String.format("%s", countValues(item, values)));
      }
      return anoda.toString();
    }
    
    public static int countValues(int value, int[] values) {
      int count = 0;
      for (int item : values) {
        if (value == item) count++;
      }
      return count;
    }

}
