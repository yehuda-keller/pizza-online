package hac.backend;

import java.util.List;

public class Order {
    private Long id;
    private String phoneNumber;
    private String address;
    private String name;
    private List<PizzaOrder> selectedPizzas;    // Changed to List

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

    public List<PizzaOrder> getSelectedPizzas() {
        return selectedPizzas;
    }

    public void setSelectedPizzas(List<PizzaOrder> selectedPizzas) {
        this.selectedPizzas = selectedPizzas;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", address='" + address + '\'' +
                ", name='" + name + '\'' +
                ", selectedPizzas=" + selectedPizzas +
                '}';
    }
}
