package hac.backend;

public class Pizza {
    private String title;
    private double price;
    private String description;
    private String image; // You might store image URLs

    public Pizza(String title, double price, String description, String image) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    // Getters and setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
