package hac.backend;

public class Order {
    private Long id;
    private String phoneNumber;
    private String address;
    private String name;
    private String selectedPizza;    // New field

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSelectedPizza() {
        return selectedPizza;
    }

    public void setSelectedPizza(String selectedPizza) {
        this.selectedPizza = selectedPizza;
    }


    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", address='" + address + '\'' +
                ", name='" + name + '\'' +
                " pizza type='" + selectedPizza + '\'' +
                '}';
    }
}
