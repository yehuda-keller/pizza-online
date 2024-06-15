package hac.backend;

public class PizzaOrder {
    private String title;
    private int quantity;
    private double price;

    // Getters and setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "PizzaOrder{" +
                "title='" + title + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }
}
